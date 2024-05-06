const body = document.querySelector('body');
const themeSwitch = document.querySelector('.switch-theme');
const modeText = document.querySelector('.theme-text');
const link = document.querySelector('.light-link');
let totalPosts = JSON.parse(localStorage.getItem('totalPosts')) || [];

function storeBlogPost(blogPost) {
    totalPosts.push(blogPost);
    localStorage.setItem('totalPosts', JSON.stringify(totalPosts));
}

function getBlogPosts() {
    return JSON.parse(localStorage.getItem('totalPosts')) || [];
}

//Toggle light/dark mode
let mode = 'light';

themeSwitch.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        body.setAttribute('class', 'dark');
        link.setAttribute('class', 'dark-link');
        modeText.textContent = "Light Mode";
    } else {
        mode = 'light';
        body.setAttribute('class', 'light');
        link.setAttribute('class', 'light-link');
        modeText.textContent = "Dark Mode";
    }
})