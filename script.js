// Change text content
document.getElementById('change-text-btn').addEventListener('click', function () {
  const textElement = document.getElementById('dynamic-text');
  textElement.textContent = 'The text has been successfully changed!';
});

// Toggle CSS style
document.getElementById('toggle-style-btn').addEventListener('click', function () {
  const title = document.getElementById('main-title');
  title.classList.toggle('highlight');
});

// Add/remove element
document.getElementById('toggle-element-btn').addEventListener('click', function () {
  const content = document.getElementById('extra-content');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
});
