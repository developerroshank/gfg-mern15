const add = document.getElementById('add');
const dltAll = document.getElementById('dltAll');
const todos = document.getElementById('todos');

add.addEventListener('click', () => {
    const title = document.getElementById('title');
    const desc = document.getElementById('desc');

    if (!title.value.trim() || !desc.value.trim()) {
        alert("Please fill in both title and description.");
        return;
    }

    const box = document.createElement('div');
    box.className = 'box';
    const todo = document.createElement('li');
    const check = document.createElement('input');
    check.type = 'checkbox';
    const todoTitle = document.createElement('h3');
    todoTitle.setAttribute('contenteditable', 'true');
    const todoDesc = document.createElement('p');
    todoDesc.setAttribute('contenteditable', 'true');

    const dlt = document.createElement('button');

    dlt.innerText = "Delete";
    todoTitle.innerText = title.value.trim();
    todoDesc.innerText = desc.value.trim();


    todo.appendChild(check);
    todo.appendChild(todoTitle);
    todo.appendChild(todoDesc);
    box.appendChild(todo);
    box.appendChild(dlt);
    todos.appendChild(box);

    title.value = "";
    desc.value = "";

    dlt.addEventListener('click', () => box.remove());
});

dltAll.addEventListener('click', () => todos.innerHTML = "");
