const productForm = document.forms["addNewProductForm"];
const formData = {
  productName: productForm["productName"],
  category: productForm["category"],
  productImages: productForm["productImages"],
  sku: productForm["sku"],
  highlight: productForm["highlight"],
  description: productForm["description"],

  productDimensionType: productForm["dimensionType"],
  productDimension: {
    length: productForm["length"],
    breadth: productForm["breadth"],
    height: productForm["height"],
  },

  quantityType: productForm["quantityType"],
  quantity: productForm["quantity"],

  status: productForm["status"],

  sellingPrice: productForm["sp"],

  daysToDispatch: productForm["DTD"],

  returnAccept: productForm["returnAccept"],
  returnDays: productForm["returnDays"],
};

//? product dimension check disable attribute
formData.productDimensionType.addEventListener("change", () => {
  const dimension = [
    formData.productDimension.length,
    formData.productDimension.breadth,
    formData.productDimension.height,
  ];
  if (
    formData.productDimensionType.value === null ||
    formData.productDimensionType.value === undefined ||
    formData.productDimensionType.value === "" ||
    formData.productDimensionType.value === "0"
  ) {
    dimension.forEach((item) => {
      item.disabled = true;
    });
  } else if (formData.productDimensionType.value === "0") {
    dimension.forEach((item) => {
      item.disabled = true;
    });
  } else {
    dimension.forEach((item) => {
      item.disabled = false;
    });
  }
});
//?Quantity select option check for input
formData.quantityType.addEventListener("change", () => {
  if (
    formData.quantityType.value === null ||
    formData.quantityType.value === undefined ||
    formData.quantityType.value === "" ||
    formData.quantityType.value === 0
  ) {
    formData.quantity.disabled = true;
  } else {
    formData.quantity.disabled = false;
  }
});
formData.returnAccept.addEventListener("change", () => {
  if (formData.returnAccept.value === "yes") {
    formData.returnDays.disabled = false;
  } else {
    formData.returnDays.disabled = true;
  }
});
const validateProductForm = (e) => {
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
      name.style.boxShadow = "none";
      name.style.border = "1px solid red";
      return true;
    }
  };
  const errorMsg = () => {
    e.preventDefault();
    document.querySelector(".error-msg").textContent =
      "All Fields Indicated '*' Must Be Filled";
    document.querySelector(".error-msg").classList.add("alert");
    document.querySelector(".error-msg").classList.add("alert-danger");
    document.querySelector(".error-msg").classList.add("text-center");
  };
  if (
    checknull(formData.productName) ||
    checkSelect(formData.category) ||
    checknull(formData.sku) ||
    checknull(formData.highlight) ||
    checknull(formData.description) ||
    checknull(formData.sellingPrice) ||
    checknull(formData.daysToDispatch) ||
    checkSelect(formData.status)
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
productForm.addEventListener("submit", validateProductForm, true);
