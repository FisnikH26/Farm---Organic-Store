export default function Navbar(currentPage) {
  let content = `<nav class="navbar navbar-expand-lg bg-body-tertiary border border-bottom py-4 fw-bold fs-5">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="./assets/img/farm.png" alt="" width="100px" title="${currentPage}">
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
                                    <p class="total-price fw-bold fs-6 mb-0">TOTAL PRICE: $0</p>
                                </div>
                                <div id="cart" class="d-flex flex-column py-3">

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
                </div>
            </div>
        </nav>`;

  return content;
}
