export default function Navbar() {
  let user = JSON.parse(window.localStorage.getItem("loggedInUser")); 
  let content = `<nav class="navbar navbar-expand-lg bg-body-tertiary border border-bottom py-4 fw-bold fs-5">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="./assets/img/farm.png" alt="" width="100px" >
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
                        ${user.length ? `<li class="nav-item">
                                                <a class="nav-link fw-bold" href="/create_blog_post.html">Create a blog post</a>
                                            </li>`:""
                        }
                        ${user.length && user[0].admin == true ? `<li class="nav-item">
                                                <a class="nav-link fw-bold" href="/dashboard.html">Dashboard</a>
                                            </li>`:""
                        }
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
                        user.length
                          ? `<button class="btn btn-danger" onclick="logOut()">Log Out</button>`
                          : 
                          `<a href="/sign_in.html" class="btn btn-info">Sign in</a> 
                          <a href="/log_in.html" class="btn btn-dark">Log in</a>`
                      }
                  </div>
                </div>
            </div>
        </nav>`;

  return content;
}
