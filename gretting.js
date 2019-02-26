const form = document.querySelector('.js-form'), 
    input = document.querySelector('input'),
    greetings = document.querySelector('.js-greetings');

const User_LS = 'currentUser',
    showIng_CN = 'showing';

function saveName(text){
    localStorage.setItem(User_LS, text);
}

// submit 이벤트
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(showIng_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(showIng_CN);
    greetings.classList.add(showIng_CN);
    greetings.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(User_LS)
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();