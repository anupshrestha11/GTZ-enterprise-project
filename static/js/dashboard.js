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

//! ckeditor

ClassicEditor.create(document.querySelector("#editor"), {
  toolbar: {
    items: [
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "indent",
      "outdent",
      "|",
      "blockQuote",
      "insertTable",
      "undo",
      "redo",
      "alignment",
    ],
  },
  language: "en",
  image: {
    toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  licenseKey: "",
})
  .then((editor) => {
    window.editor = editor;
  })
  .catch((error) => {
    console.error("Oops, something gone wrong!");
    console.error(
      "Please, report the following error in the https://github.com/ckeditor/ckeditor5 with the build id and the error stack trace:"
    );
    console.warn("Build id: 2ktte3oxf21f-4j0omid7h9rd");
    console.error(error);
  });
