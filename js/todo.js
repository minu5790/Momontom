const toDoform = document.querySelector(".js-toDoForm"),
  toDoinput = toDoform.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDOS = [];

function deleteToDo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleantoDos = toDOS.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDOS = cleantoDos;
  console.log(cleantoDos);
  saveToDos();
}
function saveToDos() {
  //로컬스토리지에는 자바스크립트를 스트링으로 저장하려 하기 때문에 배열로 사용할 수 없다.
  // localStorage.setItem(TODOS_LS, toDOS);
  localStorage.setItem(TODOS_LS, JSON.stringify(toDOS));
}
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDOS.length + 1;
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);

  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: toDOS.length + 1,
  };
  toDOS.push(toDoObj);
  saveToDos();
}
function Submit(e) {
  e.preventDefault();
  const currentValue = toDoinput.value;
  paintToDo(currentValue);
}
function loadTodos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parseToDos = JSON.parse(loadedToDos);
    parseToDos.forEach((e) => paintToDo(e.text));
  }
}
function init() {
  loadTodos();
  toDoform.addEventListener("submit", Submit);
}
init();
