// Task form elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const categoryInput = document.getElementById('category-input');
const taskList = document.getElementById('task-list');
const categoryFilter = document.getElementById('category-select');

// Add task event listener
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the input values
  const taskText = taskInput.value;
  const taskCategory = categoryInput.value;

  // Create a new task
  const taskItem = document.createElement('article');
  taskItem.classList.add('task');
  taskItem.dataset.category = taskCategory;
  taskItem.innerHTML = `
    <span>${taskText} (${taskCategory})</span>
    <button class="delete-btn">Delete</button>
  `;

  // Append to the task list
  taskList.appendChild(taskItem);

  // Clear the input
  taskInput.value = '';
});

// Task deletion
taskList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
});

// Filter tasks by category
categoryFilter.addEventListener('change', function () {
  const selectedCategory = categoryFilter.value;
  const tasks = document.querySelectorAll('.task');

  tasks.forEach(task => {
    if (selectedCategory === 'all' || task.dataset.category === selectedCategory) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
});
