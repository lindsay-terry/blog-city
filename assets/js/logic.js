const body = document.querySelector('body');
const themeText = document.querySelector('.theme-text');
const link = document.querySelectorAll('.light-link');
const toggle = document.querySelector('.toggle input[type="checkbox"]');


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

//functions to assign dark/light mode attributes
function setDarkMode() {
    body.setAttribute('class', 'dark');
    themeText.textContent = "Dark Mode";
    for (let i = 0; i < link.length; i++) {
       link[i].setAttribute('class', 'dark-link'); 
    }
}

function setLightMode() {
    body.setAttribute('class', 'light');
    themeText.textContent = "Light Mode";
    for (let i = 0; i < link.length; i++) {
        link[i].setAttribute('class', 'light-link'); 
    }
}

//function to retain mode via local storage
function keepMode() {
    let currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        if (currentTheme === 'light') {
            setLightMode();
            toggle.checked = false;
        } else {
            setDarkMode();
            toggle.checked = true;
        }
    }
}

//function to change the themes
function changeTheme(event) {
    if (event.target.checked) {
        setDarkMode();
        localStorage.setItem('theme', 'dark');
    } else {
        setLightMode();
        localStorage.setItem('theme', 'light');
    }
}

toggle.addEventListener('change', changeTheme, false);
keepMode();

