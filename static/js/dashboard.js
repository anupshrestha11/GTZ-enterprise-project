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

//? ckeditor 5
const ckeditor = (id) => {
  ClassicEditor.create(document.querySelector(`#${id} `)).catch((error) => {
    console.error(error);
  });
};
ckeditor("highlight");
ckeditor("description");
