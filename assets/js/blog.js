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
    
    //iterate through the array to create styling for each post
    for (let i =0; i < totalPosts.length; i++) {
        const post = totalPosts[i];

        const postBody = document.createElement('div');
        const postTitle = document.createElement('p');
        const postAuthor = document.createElement('p');
        const postContent = document.createElement('p');

        main.appendChild(postBody);
        postBody.appendChild(postTitle);
        postBody.appendChild(postContent);
        postBody.appendChild(postAuthor);

        postBody.setAttribute('class', 'post-body');
        postTitle.setAttribute('class', 'post-title');
        postContent.setAttribute('class', 'post-content');
        postAuthor.setAttribute('class', 'post-author');

        postTitle.textContent = post.title;
        postAuthor.textContent = `Posted by: ${post.username}`;
        postContent.textContent = post.content;

    };

}
//call the function to render the posts to the screen
renderBlogPosts();


