let inputs = document.getElementById("task-input");
const list = document.getElementById("task-list");
const form = document.getElementById("task-form");

const finishTask = (e) => {
  const listItem = e.target.parentElement;
  const checkBox = listItem.querySelector("input[type=checkbox]");
  if (!checkBox.checked) {
    alert("Please check the checkbox first");
    return;
  }
  checkBox.disabled = true;
  listItem.style.textDecoration = "line-through";
  listItem.style.color = "red";
  e.target.remove();
};

const generateBtnCheckbox = () => {
  const btn = document.createElement("input");
  btn.setAttribute("type", "submit");

  btn.addEventListener("click", finishTask);

  return btn;
};

const generateCheckbox = () => {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  return checkBox;
};

function postTask() {
  const listItem = document.createElement("li");
  let checkBox = generateCheckbox();
  let buttonCheckbox = generateBtnCheckbox(checkBox);

  listItem.innerText = inputs.value;
  listItem.appendChild(checkBox);
  listItem.appendChild(buttonCheckbox);
  list.appendChild(listItem);
}

function displayText() {
  inputs.value = "";
}

form.addEventListener("submit", (e) => {
  if (inputs.value === "") {
    alert("Please enter a task");
    return;
  }
  e.preventDefault();
  postTask();
  displayText();
});
