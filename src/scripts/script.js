const STORAGE_KEYS = {
    THEME: 'theme'
};

const themeBtn = document.createElement('button');

const initTheme = () => {
    themeBtn.innerText = 'Dark Mode';
    document.body.prepend(themeBtn);

    if (localStorage.getItem(STORAGE_KEYS.THEME) === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

const toggleTheme = () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem(STORAGE_KEYS.THEME, isDarkMode ? 'dark' : 'light');
};

const init = () => {
    initTheme();

    themeBtn.addEventListener('click', toggleTheme);
};

init();