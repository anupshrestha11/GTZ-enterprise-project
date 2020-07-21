const btnAddToCart = document.getElementById("btnAddToCart");
const cartItems = document.getElementById("cartItems");

btnAddToCart.addEventListener("click", addToCart);

let item = Number.parseInt(cartItems.textContent);

const sendHttpRequest = (method, url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {

      reject("Something went wrong!!!");
    };
    xhr.send();
  });
};

function addToCart(e) {
  e.preventDefault();
  item += 1;
  const href = e.target.href;
  sendHttpRequest("GET", href)
    .then((responseData) => {
      console.log(responseData);
      cartItems.textContent = item;
    })
    .catch((err) => {
      console.log(err);
    });
}
