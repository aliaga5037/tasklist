let inputs = document.getElementById("task-input");
const list = document.getElementById("task-list");

function postTask() {
  const listItem = document.createElement("li");
  listItem.innerText = inputs.value;

  list.appendChild(listItem);
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  listItem.appendChild(checkBox);
  let buttonCheckbox = document.createElement("input");
  buttonCheckbox.setAttribute("type", "submit");
  buttonCheckbox.style.padding = "5px";
  buttonCheckbox.style.borderRadius = "4px";
  buttonCheckbox.style.backgroundColor = "rgba(20, 20, 20, 0.849)";
  buttonCheckbox.style.color = "rgb(255, 252, 252)";
  buttonCheckbox.addEventListener("click", () => {
    buttonCheckbox.remove();
    checkBox.remove();
    listItem.style.textDecoration = "line-through";
    listItem.style.fontWeight = "600";
    listItem.style.fontSize = "22px";
  });

  listItem.appendChild(buttonCheckbox);
}

let clear = document
  .getElementById("btn")
  .addEventListener("click", displayText);

function displayText() {
  inputs.value = "";
}
