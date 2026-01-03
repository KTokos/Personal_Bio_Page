/* Apply the theme immediately (Runs on ALL pages) */
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

/* Toggle Logic (Only runs if the switch exists on the page) */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');

    // CHECK: Does the button exist on this page?
    if (themeToggle) {
        // Sync the switch position with the current theme
        if (savedTheme === 'dark') {
            themeToggle.checked = true;
        }

        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});