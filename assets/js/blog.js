const backButton = document.querySelector('#back-button')
const themeSwitch = document.querySelector('#switch-theme');
const body = document.querySelector('body');
const modeText = document.querySelector('.theme-text');
const main = document.querySelector('main');

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

//render blog posts from local storage on screen
function renderBlogPosts() {
    getBlogPosts();
    
    for (let i =0; i < totalPosts.length; i++) {
        const post = totalPosts[i];

        

        const postBody = document.createElement('div');

        main.appendChild(postBody);

        const postTitle = document.createElement('h2');

        postBody.appendChild(postTitle);

        const postAuthor = document.createElement('h3');

        postBody.appendChild(postAuthor);

        const postContent = document.createElement('p');

        postBody.appendChild(postContent);

        postTitle.textContent = `Title: ${post.title}`;
        postAuthor.textContent = `Author: ${post.username}`;
        postContent.textContent = post.content;



        // const usernameLi = document.createElement('p');
        // p.setAttribute('style', 'color: black, font-size:20px;')
        // p.textContent = post.username;
        // main.appendChild(p);

    };

}

renderBlogPosts();


