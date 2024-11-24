
const userInput = document.getElementById('todo-input');
const btnSubmit = document.getElementById('submit-todo');
const display = document.getElementById('display-todo');

btnSubmit.addEventListener('click',handleTodo);

function handleTodo(){
    const todoText = userInput.value;
    if (todoText !== "") {
        handleDisplay(todoText);
        userInput.value = ''; 
    }
}

function handleDisplay(todoText){

    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.innerText = todoText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            span.style.textDecoration = 'line-through';
        } else {
            span.style.textDecoration = 'none';
        }
    });



    const btnEdit = document.createElement('button');
    btnEdit.innerText = 'Edit';
    btnEdit.className = 'btn-edit';

    btnEdit.addEventListener('click',function(){
        handleEdit(li)
    });
    
    const btnDelete = document.createElement('button');
        btnDelete.innerText = 'Delete';
        btnDelete.className = 'btn-delete';
        btnDelete.addEventListener('click', function() {
            li.remove();
        });

    
        li.appendChild(span);
        li.appendChild(checkbox)
        li.appendChild(btnEdit);
        li.appendChild(btnDelete);
        display.appendChild(li);
}


function handleEdit(li){
   
    const editDiv = document.getElementById('edit');
    editDiv.innerHTML = '';

    const currentText = li.querySelector('.todo-text').innerText;

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'edit-input';
    input.placeholder = 'Edit your todo';
    input.value = currentText;
    
    
    const submitButton = document.createElement('button');
    submitButton.id = 'edit-submit';
    submitButton.innerText = 'Submit';

    submitButton.addEventListener('click',function(){
        const newText = input.value;
        li.querySelector('.todo-text').innerText = newText;
        editDiv.style.display = 'none';
    })
    
    editDiv.appendChild(input);
    editDiv.appendChild(submitButton);
    
    editDiv.style.display = 'block';

}