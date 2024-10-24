const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const categoryInput = document.getElementById('category-input');
const taskList = document.getElementById('task-list');
const categoryFilter = document.getElementById('category-select');

// Add task event listener
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = taskInput.value;
  const taskCategory = categoryInput.value;

  // Create task element
  const taskItem = document.createElement('article');
  taskItem.classList.add('task');
  taskItem.dataset.category = taskCategory;

  taskItem.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <span>${taskText} (${taskCategory})</span>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = '';
});

// Handle checkbox and delete button
taskList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains('task-checkbox')) {
    const taskItem = e.target.nextElementSibling;
    taskItem.style.textDecoration = e.target.checked ? 'line-through' : 'none';
  }
});

// Filter tasks by category
categoryFilter.addEventListener('change', function () {
  const selectedCategory = categoryFilter.value;
  const tasks = document.querySelectorAll('.task');

  tasks.forEach(task => {
    if (selectedCategory === 'all' || task.dataset.category === selectedCategory) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
});
