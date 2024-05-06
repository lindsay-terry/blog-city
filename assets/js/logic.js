const body = document.querySelector('body');
const themeSwitch = document.querySelector('.switch-theme');
const modeText = document.querySelector('.theme-text');
const link = document.querySelectorAll('.light-link');

//set blog post to local storage
let totalPosts = JSON.parse(localStorage.getItem('totalPosts')) || [];
function storeBlogPost(blogPost) {
    totalPosts.push(blogPost);
    localStorage.setItem('totalPosts', JSON.stringify(totalPosts));
}

//retrieve blog post from local storage
function getBlogPosts() {
    return JSON.parse(localStorage.getItem('totalPosts')) || [];
}

//Toggle light/dark mode
let mode = 'light';
let darkMode = localStorage.getItem("dark-mode");

function setDarkMode() {
        mode = 'dark';
        body.setAttribute('class', 'dark');
        modeText.textContent = "Light Mode";
        for (let i = 0; i < link.length; i++) {
           link[i].setAttribute('class', 'dark-link'); 
        }
}

function setLightMode() {
    mode = 'light';
    body.setAttribute('class', 'light');
    modeText.textContent = "Dark Mode";
    for (let i = 0; i < link.length; i++) {
        link[i].setAttribute('class', 'light-link'); 
     }
}

themeSwitch.addEventListener('click', function() {
    if (mode === 'light') {
        setDarkMode();

    } else {
        setLightMode();
    }
})

// themeSwitch.addEventListener('click', function () {
//     if (mode === 'light') {
//         mode = 'dark';
//         body.setAttribute('class', 'dark');
//         modeText.textContent = "Light Mode";
//         for (let i = 0; i < link.length; i++) {
//            link[i].setAttribute('class', 'dark-link'); 
//         }
//     } else {
//         mode = 'light';
//         body.setAttribute('class', 'light');
//         modeText.textContent = "Dark Mode";
//         for (let i = 0; i < link.length; i++) {
//             link[i].setAttribute('class', 'light-link'); 
//          }
//     }
// })


