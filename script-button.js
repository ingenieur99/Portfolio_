// Select buttons and project containers
const uxUiButton = document.getElementById('uxUiButton');
const frontendButton = document.getElementById('frontendButton');
const uxUiProjects = document.getElementById('uxUiProjects');
const frontendProjects = document.getElementById('frontendProjects');

// Add event listeners for UX/UI button
uxUiButton.addEventListener('click', () => {
  uxUiProjects.classList.toggle('hidden'); // Toggle visibility
  frontendProjects.classList.add('hidden'); // Ensure other container is hidden
});

// Add event listeners for Frontend button
// Listen for click event on the frontend button
document.getElementById('frontendButton').addEventListener('click', function () {
  // Toggle the visibility of the hidden block
  const hiddenBlock = document.getElementById('hiddenBlock');
  hiddenBlock.classList.toggle('hidden');
  
  // You can also toggle visibility of other blocks if needed
  const frontendProjects = document.getElementById('frontendProjects');
  frontendProjects.classList.toggle('hidden');
});

