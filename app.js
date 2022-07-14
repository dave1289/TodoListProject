const taskList = document.querySelector('#todoList')
const form = document.querySelector('form')
const remove = document.querySelector('taskList button')
const input = document.querySelector('input')
const clear = document.querySelector('#clear')

let tasks = []

 for (let i = 0; i <= localStorage.length; i++) {
        let taskPop = localStorage.getItem(`task${i}`)
        console.log(taskPop)
        tasks.push(taskPop);
        let taskLoader = document.createElement('li');
        taskLoader.textContent = taskPop;
        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Remove'
        removeBtn.classList.add('submit')
        taskLoader.appendChild(removeBtn)
        taskList.appendChild(taskLoader)
    }


form.addEventListener('submit', function(e){
    e.preventDefault();
    const newLi = document.createElement('li');
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
    removeBtn.classList.add('submit')
    newLi.textContent = input.value;
    taskList.appendChild(newLi)
    newLi.appendChild(removeBtn)
    tasks.push(input.value)
    for (let i = 0; i < tasks.length; i++) {
        localStorage.setItem(`task${i}`, tasks[i]);
    }
    input.value = ''
}) 

taskList.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove()
    }
}) 

taskList.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        const complete = e.target
        complete.classList.toggle('complete')
    }
})

clear.addEventListener('click', function(){
    localStorage.clear();
    taskList.innerHTML = ''
})