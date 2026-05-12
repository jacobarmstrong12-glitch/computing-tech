// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('darkModeToggle');
  const htmlElement = document.documentElement;
  
  // Check if dark mode was previously saved
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  
  if (isDarkMode) {
    htmlElement.classList.add('dark-mode');
    if (toggleButton) toggleButton.textContent = '☀️ Light Mode';
  }
  
  // Toggle dark mode on button click
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      htmlElement.classList.toggle('dark-mode');
      
      if (htmlElement.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleButton.textContent = '☀️ Light Mode';
      } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleButton.textContent = '🌙 Dark Mode';
      }
    });
  }

  const navElement = document.querySelector('nav');
  const hideNavButton = document.getElementById('hideNavButton');
  const showNavButton = document.getElementById('showNavButton');

  function updateNavButtons() {
    const hidden = navElement?.classList.contains('hidden');
    if (showNavButton) showNavButton.classList.toggle('hidden', !hidden);
    if (hideNavButton) hideNavButton.classList.toggle('hidden', hidden);
  }

  if (hideNavButton) {
    hideNavButton.addEventListener('click', function() {
      navElement?.classList.add('hidden');
      updateNavButtons();
    });
  }

  if (showNavButton) {
    showNavButton.addEventListener('click', function() {
      navElement?.classList.remove('hidden');
      updateNavButtons();
    });
  }

  updateNavButtons();
});
