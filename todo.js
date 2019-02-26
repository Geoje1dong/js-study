const toDoForm = document.querySelector('.js-toDoform'),
    toDoInput = toDoForm.querySelector('input');
    toDoList = document.querySelector('.js-toDolist');

const TODOS_ls = 'toDos';
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    console.log(toDos);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_ls,  JSON.stringify(toDos));
}

function paintTodo(text){    
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const newId = toDos.length + 1;
    const span = document.createElement('span');
    delBtn.innerHTML = "x";
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = '';
}

function loadToDOs(){
    const loadedToDOs = localStorage.getItem(TODOS_ls);
    if(loadedToDOs !== null){
        const parsedToDos = JSON.parse(loadedToDOs);
        parsedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        })
    }
}

function init(){
    loadToDOs();
    toDoForm.addEventListener('submit', handleSubmit)
}

init();