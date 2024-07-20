 document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addedTasks = new Set();

    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        if (addedTasks.has(taskText)) {
            alert("This task already exists.");
            return;
        }

        const li = document.createElement('li');
        const textSpan = document.createElement('span');
        const removeButton = document.createElement('button');

        textSpan.textContent = taskText;
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        removeButton.onclick = () => {
            taskList.removeChild(li);
            addedTasks.delete(taskText);
        };

        li.appendChild(textSpan);
        li.appendChild(removeButton);
        taskList.appendChild(li);
        
        addedTasks.add(taskText);
        taskInput.value = '';
    };

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

