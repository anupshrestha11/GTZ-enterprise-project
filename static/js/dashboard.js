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

//delete comfirmation
$(".delete").click((e) => {
  if (!confirm("Do you want to delete!!!")) {
    e.preventDefault();
  }
});

const ellipsis = (item) => {
  document.querySelectorAll(`.${item}`).forEach((currentItem) => {
    let currentText = currentItem.textContent;
    let maxLength = currentItem.getAttribute("data-maxlength");
    if (currentText.length >= maxLength) {
      currentItem.textContent = currentText.substr(0, maxLength) + "...";
    } else {
      currentItem.textContent = currentText;
    }
  });
};

ellipsis("ellipsis");

const categoryDropDown = (e) => {
  let target = e.target;
  if (target.nodeName === "SPAN") {
    target = target.parentElement;
  }
  target = target.parentElement.children[1];
  if (target.style.display === "block") {
    target.style.display = "none";
    target.parentElement.children[0].children[0].textContent = "expand_more";
  } else {
    target.style.display = "block";
    target.parentElement.children[0].children[0].textContent = "expand_less";
  }
};

// $(".category-name").click(categoryDropDown);
