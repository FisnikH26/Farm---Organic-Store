// Cart

let cart;
function getCartFromStorage(){
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
        displayCartItems()
    } else {
        cart = []
    }

    return cart
}
getCartFromStorage()
async function addToCart(id) {
  await fetch(`https://658b1777ba789a9622386cc7.mockapi.io/farm/v1/products?id=${id}`)
      .then(res => res.json())
      .then(data => {
          cart.push({ id: data[0].id, name: data[0].name, category: data[0].category, img: data[0].img, price: data[0].price, amount: 1 })

          document.querySelector('.total-price').innerHTML = `TOTAL PRICE: $ ${cart[0].total}`
          let cartStr = JSON.stringify(cart)
          localStorage.setItem('cart', cartStr);
          displayCartItems()
          totalPrice('total-price')

      })
}

function displayCartItems() {
  let items = JSON.parse(localStorage.getItem('cart'))

  let cartdiv = document.getElementById('cart')
  let cardAmount = document.querySelector('.cartAmount')
  cartdiv.innerHTML = ''
  items.forEach((cartitem, i) => {
      cartdiv.innerHTML += `<div class="cart-items d-flex align-items-center"> 
                              <div class="img">
                                      <img src="${cartitem.img}" width="70px" alt="">
                                  </div>
                                  <div>
                                      <h5>${cartitem.name}</h5>
                                      <button class="btn text-danger mb-2 fa-solid fa-trash" onclick="removeFromCart(${i})"></button> 
                                      <div class="d-flex align-items-center justify-content-between"> 
                                          <button class="btn btn-warning " onclick="decProductAmount(${i})">-</button>
                                          <span class="amount-of-${cartitem.name} px-2">${cartitem.amount}</span>
                                          <button class="btn btn-success" onclick="incProductAmount(${i})">+</button>
                                          <span class="fw-bold price-of-${cartitem.name} ps-2" price="${cartitem.price}">$${cartitem.price}</span> 
                                      </div>
                                  </div>
                              </div>`
  })
  document.querySelector('.totalProducts').innerHTML = `${cart.length ? cart.length : "0"}`
  cardAmount.innerHTML = `IN CART: ${cart.length} PRODUCTS`


}
const removeFromCart = (id) => {
  
    let removeItem = cart.filter(item => item !== cart[id])
  console.table(removeItem);
  let cartStr = JSON.stringify(removeItem)
  localStorage.setItem('cart', cartStr);
  getCartFromStorage()

}

function incProductAmount(id) {


  Object.assign(cart[id].amount, { amount: cart[id].amount++ },);

  document.querySelector(`.amount-of-${cart[id].name}`).innerHTML = cart[id].amount;
  document.querySelector(`.price-of-${cart[id].name}`).innerHTML = "$ " + cart[id].price;
  // Increment the total price 
  let cartStr = JSON.stringify(cart)
  localStorage.setItem('cart', cartStr);
  totalPrice('total-price')
}


function decProductAmount(id) {

  if (cart[id].amount <= 1) {
      let alertMsg = document.createElement('div')
      alertMsg.className = 'alert alert-danger position-absolute'
      alertMsg.innerHTML = `You can't have less than one` 
      document.querySelector('body').append(alertMsg)

      setTimeout(() => {
        alertMsg.remove()
      }, 1000);

  } else {

      Object.assign(cart[id].amount, { amount: cart[id].amount-- });
      document.querySelector(`.amount-of-${cart[id].name}`).innerHTML = cart[id].amount
      document.querySelector(`.price-of-${cart[id].name}`).innerHTML = "$ " + cart[id].price;


      // Decrement the total price
      let cartStr = JSON.stringify(cart)
      localStorage.setItem('cart', cartStr);
      totalPrice('total-price')


  }

}
