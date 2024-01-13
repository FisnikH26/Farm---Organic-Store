export default function Navbar() {
  let user = JSON.parse(window.localStorage.getItem("loggedInUser")); 
  let content = `<nav class="navbar navbar-expand-lg bg-body-tertiary border border-bottom py-4 fw-bold fs-5">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="./assets/img/farm.png" alt="logo" width="100px" >
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" >
                            <a class="nav-link fw-bold" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="/blog.html">Blog</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="/shop.html">Shop</a>
                        </li>
                        
                        
                    </ul>
                    
                  ${
                    window.location.pathname == "/shop.html"
                      ? `<div class="d-flex">
                  <div class="position-relative">
                      <button class="btn btn-cart">
                          <i class="fa-solid fa-cart-shopping"></i>
                          <sup class="fw-bold text-dark totalProducts">0</sup>
                      </button>
                      <div
                          class="cart-container py-3 border-bottom bg-white border border-dark rounded position-absolute ">
                          <div class="container">
                              <div class="border-bottom">
                                  <p class="cartAmount fs-6 mb-0">IN CART: 0 PRODUCTS</p>
                                  <p class="fw-bold fs-6 mb-0">TOTAL PRICE: $<span class="total-price">0</span> </p>
                              </div>
                              <div id="cart" class="d-flex flex-column py-3">
                                      <h4>No Products in cart</h4>
                              </div>
                              <div class=" border-top pt-2">
                                  <a href="/checkout.html"
                                      class="text-decoration-none btn btn-primary w-100 text-center">Checkout</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`
                      : " "
                  }
                  <div>
                    ${
                        user.id
                          ? `<div>
                                    
                                    <ul class="nav ">
                                     <li class="nav-item dropdown">
                                        <a class="nav-link d-flex align-items-center  text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <h6 class="mb-0 me-2">${user.name}</h6>
                                        ${user.admin == true ? "<img src='/assets/img/crown.png' width='20px' />":""}
                                        ${user.admin == false && user.verified == true ? "<img src='/assets/img/verified.png' width='20px' />":""}
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a class="nav-link text-dark fw-bold" href="/create_blog_post.html">Create a blog post</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-dark fw-bold" href="/profile.html?author=${user.name}">My Blogs</a>
                                            </li>
                                            ${user.admin == true ? `<li class="nav-item">
                                                                        <a class="nav-link text-dark fw-bold" href="/dashboard.html">Dashboard</a>
                                                                    </li>`:""
                                            }
                                            <li><hr class="dropdown-divider"></li>
                                            <li class="text-center px-3"><button class="btn btn-outline-danger w-100" onclick="logOut()">Log Out</button></li>
                                        </ul>
                                    </li> 
                                    </ul>
                            </div>`
                          : 
                          `<a href="/sign_in.html" class="btn btn-outline-warning">Sign in</a> 
                          <a href="/log_in.html" class="btn btn-warning ">Log in</a>`
                      }
                  </div>
                </div>
            </div>
        </nav>`;

  return content;
}



{}