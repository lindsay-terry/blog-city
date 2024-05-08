const body = document.querySelector('body');
const themeSwitch = document.querySelector('#switch-theme');
const modeText = document.querySelector('.theme-text');
const link = document.querySelectorAll('.light-link');
// const sliderSwitch = document.querySelector('#slider-switch');


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


function setDarkMode() {
    // let isChecked = localStorage.getItem('isChecked') === "true"? true:false;
    // themeSwitch.checked = isChecked ?? true;false
        body.setAttribute('class', 'dark');
        modeText.textContent = "Light Mode";
        for (let i = 0; i < link.length; i++) {
           link[i].setAttribute('class', 'dark-link'); 
        }
   
}

function setLightMode() {
    body.setAttribute('class', 'light');
    modeText.textContent = "Dark Mode";
    for (let i = 0; i < link.length; i++) {
        link[i].setAttribute('class', 'light-link'); 
     }
}

themeSwitch.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        setDarkMode();
        localStorage.setItem('savedMode', mode);
        // localStorage.setItem('isChecked', "false");

        

    } else {
        mode = 'light';
        setLightMode();
        localStorage.setItem('savedMode', mode);
        // localStorage.setItem('isChecked', "true");
    }
})

//function to keep user preference mode across pages
function keepMode () {
    let savedMode = localStorage.getItem('savedMode');
    

    if (savedMode !== null) {
        mode = savedMode;
    } else {
        localStorage.setItem('savedMode', mode);
    }
    if (mode === 'light') {
        setLightMode();
    } else {
        setDarkMode();
    }

}

keepMode();



