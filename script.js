const INPUT = document.querySelector(".input");
const ADD_BUTTON = document.querySelector(".add-btn");
const TASK_LIST = document.querySelector(".task-list");

ADD_BUTTON.addEventListener("click", function () {
  const input = INPUT.value;
  if (input.length) {
    const div = document.createElement("div");
    div.setAttribute("class", "task");
    div.innerHTML = `
    <p contenteditable="false">${input}</p>
    <div class="task-btn">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-square-xmark"></i>
    </div>
    `;
    TASK_LIST.append(div);
    INPUT.value = "";
  }
});

TASK_LIST.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-square-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});

TASK_LIST.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-pen-to-square")) {
    let p = e.target.parentElement.parentElement.getElementsByTagName("p")[0];
    p.contentEditable = "true";
    p.focus();
    p.style.border = "1px solid black";
    p.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        p.contentEditable = "false";
        p.style.border = "none";
      }
    });
  }
});

TASK_LIST.addEventListener("click", function (e) {
  if (e.target.tagName === "P") {
    e.target.parentElement.classList.toggle("completed");
  }
});
