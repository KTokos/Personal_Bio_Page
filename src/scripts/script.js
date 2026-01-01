const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// 1. On page load, check for saved preference
const savedTheme = localStorage.getItem('theme');

// 2. Apply the saved theme if it exists
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true; // Set the switch to the "on" position
}

// 3. Listen for when the user clicks the switch
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        // Switch is ON -> Activate Dark Mode
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        // Switch is OFF -> Deactivate Dark Mode
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});