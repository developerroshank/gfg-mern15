const add = document.getElementById('add');
const deleteAll = document.getElementById('deleteAll');
const todos = document.getElementById('todos');

add.addEventListener('click', () => {
    const title = document.getElementById('title');
    const desc = document.getElementById('desc');

    if (!title.value.trim() || !desc.value.trim()) {
        alert("Please fill in both title and description.");
        return;
    }

    const todo = document.createElement('div');
    todo.className = 'todo';

    const read = document.createElement('input');
    read.type = 'checkbox';

    const contentBox = document.createElement('div');
    contentBox.className = 'contentBox';
    contentBox.style.display = 'flex';
    contentBox.style.alignItems = 'baseline';
    contentBox.style.gap = '10px';

    const content = document.createElement('div');
    content.className = 'content';

    const customize = document.createElement('div');
    customize.className = 'customize';

    const todoTitle = document.createElement('h2');
    const todoDesc = document.createElement('p');

    const edit = document.createElement('button');
    edit.id = 'edit';
    edit.innerText = 'Edit';
    edit.style.marginRight = '10px'

    const save = document.createElement('button');
    save.id = 'edit';
    save.innerText = 'Save';
    save.style.marginRight = '10px';
    save.style.display = 'none';

    const dlt = document.createElement('button')
    dlt.id = 'dlt';
    dlt.innerText = 'Delete';

    todoTitle.innerText = title.value.trim();
    todoDesc.innerText = desc.value.trim();

    todo.appendChild(contentBox);
    contentBox.appendChild(read);
    contentBox.appendChild(content);
    content.appendChild(todoTitle);
    content.appendChild(todoDesc);
    customize.appendChild(edit);
    customize.appendChild(save);
    customize.appendChild(dlt);
    todo.appendChild(customize);

    todos.appendChild(todo);

    title.value = "";
    desc.value = "";

    read.addEventListener("change", () => {
        if (read.checked) {
            todo.classList.add("read");
        } else {
            todo.classList.remove("read");
        }
    });

    edit.addEventListener("click", () => {
        todoTitle.setAttribute("contenteditable", "true");
        todoDesc.setAttribute("contenteditable", "true");

        todoTitle.focus();

        edit.style.display = 'none';
        save.style.display = 'block';
    });

    save.addEventListener("click", () => {
        todoTitle.setAttribute("contenteditable", "false");
        todoDesc.setAttribute("contenteditable", "false");

        edit.style.display = 'block';
        save.style.display = 'none';
    });


    dlt.addEventListener('click', () => todo.remove());
    
});

deleteAll.addEventListener('click', () => todos.innerHTML = "");