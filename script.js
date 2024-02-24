let providedtask = document.getElementById('provided-task');
let newTasks = document.querySelector('.section-new__tasks');

function add() {
    if(providedtask.value == '') {
        alert("Please enter a task to add.")        
    }else {
            let p = document.createElement('p');
            p.textContent = providedtask.value;
            newTasks.appendChild(p);
            providedtask.value = '';
        }
    
}