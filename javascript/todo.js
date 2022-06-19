const todoList = document.getElementById("todo_list");
const todoForm = document.getElementById("todo_form");
const todoInput = document.getElementById("todo_input");
const hiddenButton = document.getElementById("hidden_todo_input");
const addButton = document.getElementById("add_todo");

let toDos = [];

function saveTodos() {
    const todoUserName = localStorage.getItem("username");
    const TODOS_KEY = `${todoUserName}_todos`
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function addTodo() {
    const todoUserName = localStorage.getItem("username");
    const TODOS_KEY = `${todoUserName}_todos`
    const savedTodos = localStorage.getItem(TODOS_KEY);

    if (savedTodos !== null) {
        const parsedtoDos = JSON.parse(savedTodos);
        toDos = parsedtoDos;
        parsedtoDos.forEach(addTodoList);
    }
    
    if(todoInput.classList.contains("hidden")){
        todoInput.classList.remove("hidden");
        addButton.classList.add("hidden");
        hiddenButton.classList.remove("hidden");
        todoList.classList.remove("hidden");
    } else {
        todoInput.classList.add("hidden");
        addButton.innerText = "일정 추가하기"
        if(todoInput.value !== "");
            todoInput.value = "";
    }
}

function hiddenTodo(){    
    todoInput.classList.add("hidden");
    hiddenButton.classList.add("hidden");
    addButton.classList.remove("hidden")
    todoList.classList.add("hidden");
    if(todoInput.value !== "")
        todoInput.value = "";
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    }
    todoInput.value = ""
    toDos.push(newTodoObj);
    addTodoList(newTodoObj);
    saveTodos();
    todoInput.value = ""
}

function addTodoList(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button")
    button.className = "todo_romove_button"
    button.innerText = "-";
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDO) => toDO.id !== parseInt(li.id));
    saveTodos();
}

hiddenButton.addEventListener("click", hiddenTodo);
addButton.addEventListener("click", addTodo);
todoForm.addEventListener("submit", handleTodoSubmit);
