const addButton = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addButton.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');
    let li  = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);
    
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '&#10003;';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let uncheckButton = document.createElement("button");
    uncheckButton.innerHTML = '&#9985;';
    uncheckButton.classList.add('uncheck');
    task.appendChild(uncheckButton);


    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '&#10007;';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === "") {
        alert('Please Enter Task.');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = ""

    checkButton.addEventListener('click', function(){
        let li_ele = checkButton.parentElement.getElementsByTagName('li')[0];
        li_ele.style.textDecoration = "line-through";
    })

    uncheckButton.addEventListener('click', function(){
        let li_ele = uncheckButton.parentElement.getElementsByTagName('li')[0];
        li_ele.style.textDecoration = "none";
    })

    deleteButton.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.remove();
    })
})