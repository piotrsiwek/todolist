let providedtask = document.getElementById('provided-task');
let newTasks = document.querySelector('.section-new__tasks');

function add() {
    if(providedtask.value == '') {
        alert("Please enter a task to add.")        
    }else {
            let newElement = document.createElement("ul");
            let trashCan = document.createElement("span");
            trashCan.classList.add('section-new__tasksspan');

            // newElement.innerHTML = `${providedtask.value} <span>🗑️</span>`;
            // newElement.textContent = providedtask.value + '🗑️ ';
            trashCan.value = "🗑️"
            newElement.innerText = `${providedtask.value}` ;
            trashCan.innerText = `${trashCan.value}`;
            newTasks.appendChild(newElement);
            newElement.appendChild(trashCan);
            providedtask.value = '';

            // trash can function
            newElement.querySelector('span').addEventListener('click', remove);
            function remove() {
                newElement.remove();
            }
            trashCan.value = '';
}
}