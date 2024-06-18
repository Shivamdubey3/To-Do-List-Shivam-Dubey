  // Sample data for demo
  let tasks = [
    { id: 1, task: "Feed the dog", completed: false },
    { id: 2, task: "Take the cat to the vet", completed: true }
  ];

  const form = document.getElementById('todoForm');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Function to render tasks
  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        <span>${task.task}</span>
        <button class="deleteBtn">Delete</button>
      `;
      taskList.appendChild(li);

      // Add event listener for delete button
      const deleteBtn = li.querySelector('.deleteBtn');
      deleteBtn.addEventListener('click', () => {
        deleteTask(task.id);
      });
    });
  }

  // Function to add a new task
  function addTask(taskText) {
    const newTask = {
      id: tasks.length + 1,
      task: taskText,
      completed: false
    };
    tasks.push(newTask);
    renderTasks();
  }

  // Function to delete a task
  function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
  }

  // Event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
  });

  // Initial render of tasks
  renderTasks();