document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Get the task text and trim it
        const taskText = taskInput.value.trim();
        
        // Check if task text is empty
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }
        
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Add remove functionality to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append the remove button to the list item
        li.appendChild(removeButton);
        
        // Append the list item to the task list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = '';
    }
    
    // Add event listener to the add button
    addButton.addEventListener('click', addTask);
    
    // Add event listener to the input field for 'Enter' key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
