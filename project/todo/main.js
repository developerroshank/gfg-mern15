const add = document.getElementById('add');
const dltAll = document.getElementById('dltAll');
const todos = document.getElementById('todos')

add.addEventListener('click', () => {
    const title = document.getElementById('title');
    const desc = document.getElementById('desc');

    const box = document.createElement('div')
    box.className = 'box'
    const todo = document.createElement('li');
    const todoTitle = document.createElement('h5');
    const todoDesc = document.createElement('p');
    const dlt = document.createElement('button');

    dlt.innerText = "Delete"
    todoTitle.innerText = title.value
    todoDesc.innerText = desc.value


    todo.appendChild(todoTitle)
    todo.appendChild(todoDesc)
    box.appendChild(todo)
    box.appendChild(dlt)
    todos.appendChild(box)
    title.value = ""
    desc.value = ""

    dlt.addEventListener('click', () => box.remove());
});

dltAll.addEventListener('click', () => todos.remove());