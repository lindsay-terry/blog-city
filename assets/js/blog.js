const backButton = document.querySelector('#back-button')
const themeSwitch = document.querySelector('#switch-theme');
const body = document.querySelector('body');
const modeText = document.querySelector('.theme-text');

//Send user back to home page 
backButton.addEventListener('click', function(event) {
    window.location.href = './index.html';
})

//Toggle light/dark mode
let mode = 'light';

themeSwitch.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        body.setAttribute('class', 'dark');
        modeText.textContent = "Light Mode";
    } else {
        mode = 'light';
        body.setAttribute('class', 'light');
        modeText.textContent = "Dark Mode";
    }
})