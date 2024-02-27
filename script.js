let providedtask = document.getElementById('provided-task');
let newTasks = document.querySelector('.section-new__tasks');

function add() {
    if(providedtask.value == '') {
        alert("Please enter a task to add.")        
    }else {
            let newElement = document.createElement("ul");
            // newElement.innerHTML = `${providedtask.value} <span>🗑️</span>`;
            newElement.textContent = providedtask.value + '🗑️ ';
            newTasks.appendChild(newElement);
            
            providedtask.value = '';

            // trash can function
            newElement.querySelector('span').addEventListener('click', remove);
            function remove() {
                newElement.remove();
            }
}
}


