
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addedTasks = new Set();

    // Function to load tasks from Local Storage
    const loadTasks = () => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // 'false' indicates not to save again to Local Storage
        });
    };

    // Function to add a new task
    const addTask = (taskText, save = true) => {
        if (taskText.trim() === "") {
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
            updateLocalStorage();
        };

        li.appendChild(textSpan);
        li.appendChild(removeButton);
        taskList.appendChild(li);
        
        addedTasks.add(taskText);

        if (save) {
            updateLocalStorage();
        }

        taskInput.value = '';
    };

    // Function to update Local Storage
    const updateLocalStorage = () => {
        const tasks = Array.from(addedTasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Event listener for the add button
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Event listener for the Enter key press in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks when the page loads
    loadTasks();
});
