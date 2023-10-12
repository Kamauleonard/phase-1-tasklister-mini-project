
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('create-task-form');
    const taskList = document.getElementById('tasks');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const taskInput = document.getElementById('new-task-description');
        const taskText = taskInput.value;

      
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

     
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = ' -';
        deleteBtn.className = 'delete-btn';

      
        taskItem.appendChild(deleteBtn);

       
        taskList.appendChild(taskItem);

       
        taskInput.value = '';
    });

    
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }
    });
});
