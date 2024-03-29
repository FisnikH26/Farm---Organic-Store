let loggedInUser;

if (!localStorage.getItem("loggedInUser")) {
  loggedInUser = [];

  localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
} else {
  loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
}
function getQueryStringFromURL(url) {
  const pts = url.split("?");
  const ind = pts.length - 1;
  return pts[ind];
}

const totalPrice = (elementClass) => {
  let cartItem = JSON.parse(localStorage.getItem("cart"));
  let total = 0;
  cartItem.forEach((item) => {
    total += item.price * item.amount;
  });

  return total
}; 
const logIn = async (id,name, email, admin,verified) => {
  loggedInUser = { id:id,name: name, admin: admin, email: email, verified:verified};
  window.localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
};
const logOut = () => {
  loggedInUser = {};
  window.localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  window.location.reload();
};
