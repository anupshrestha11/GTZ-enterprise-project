// TODO make a browser responsive for other browser for grid animation

//? for mozilla
const body = document.querySelector("body");
const navText = document.querySelectorAll(".nav-text");
const logo = document.querySelector(".logo");
let expand = true;
document.querySelector(".btn-toggle-menu").addEventListener(
  "click",
  () => {
    if (expand) {
      body.classList.add("collapse-aside");
      body.classList.remove("expand-aside");
      logo.style.display = "none";
    } else {
      body.classList.remove("collapse-aside");
      body.classList.add("expand-aside");
      logo.style.display = "block";
    }
    expand = !expand;
  },
  true
);

const ellipsis = (item) => {
  $(`.${item}`).html((index, currentText) => {
    let maxLength = $(`.${item}`).attr("data-maxlength");
    if (currentText.length >= maxLength) {
      return currentText.substr(0, maxLength) + "...";
    } else {
      return currentText;
    }
  });
};

ellipsis("ellipsis");

const productForm = document.forms["productForm"];
const formData = {
  productName: productForm["productName"],
  category: productForm["category"],
  productImages: productForm["productImages"],
  sku: productForm["sku"],
  highlight: productForm["highlight"],
  description: productForm["description"],
  sellingPrice: productForm["sellingPrice"],
  daysToDispatch: productForm["daysToDispatch"],
  returnAccept: productForm["returnAccept"],
  ruternDays: productForm["returnDays"],

  //Todo scale select problem at last
  // quantity: productForm["quantity"],
  // quantityScale: productForm["quantityScale"],
};
const validateProductForm = (e) => {
  let i = 1;
  const checknull = (name) => {
    if (name.value === null || name.value === undefined || name.value === "") {
      name.focus();
      name.style.boxShadow = "none";
      name.style.border = "1px solid red";
      return true;
    }
    return false;
  };
  const checkSelect = (name) => {
    if (
      name.value === null ||
      name.value === undefined ||
      name.value === "" ||
      name.value === "0"
    ) {
      name.focus();
      return true;
    }
  };

  if (
    checknull(formData.productName) ||
    checkSelect(formData.category) ||
    checknull(formData.sku) ||
    checknull(formData.highlight) ||
    checknull(formData.description) ||
    checknull(formData.sellingPrice) ||
    checknull(formData.daysToDispatch) ||
    checknull(formData.ruternDays)
  ) {
    e.preventDefault();
    document.querySelector(".error-msg").textContent =
      "All Fields Indicated '*' Must Be Filled";
    document.querySelector(".error-msg").classList.add("alert");
    document.querySelector(".error-msg").classList.add("alert-danger");
    document.querySelector(".error-msg").classList.add("text-center");
    return false;
  }
};
productForm.addEventListener("submit", validateProductForm);

productForm.returnAccept.addEventListener("change", () => {
  if (productForm.returnAccept.value === "yes") {
    document.querySelector("#returnDays").disabled = false;
    document.querySelector("#returnDays").style.backgroundColor = "#fff";
  } else {
    document.querySelector("#returnDays").disabled = true;
    document.querySelector("#returnDays").style.backgroundColor = "#c9c9c9";
  }
});

document.querySelector("#returnDays").style.backgroundColor = "#c9c9c9";
