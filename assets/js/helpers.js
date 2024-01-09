  
function getQueryStringFromURL(url) {
  const pts = url.split("?");
  const ind = pts.length - 1;
  return pts[ind];
}


const totalPrice = (elementClass) => {
  let cartItem = JSON.parse(localStorage.getItem('cart'))
  let total = 0
  cartItem.forEach(item => {
      total += (item.price * item.amount)
  })

  document.querySelector(`.${elementClass}`).innerHTML = "$ " + total

  console.log(total);
}
