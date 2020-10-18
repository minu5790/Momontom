const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS ="currentUser";
const SHOWING_CN= "showing";

function Submit(event){
    event.preventDefault(); // 기본동작을 막는다.
    const currentValue = input.value;
    localStorage.setItem(USER_LS,currentValue); // 로컬저장소에 이름을 저장한다.
    paintGreeting(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",Submit);  
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
    
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init() {
  loadName();
}

init();