const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit-button');
const messageP = document.querySelector('#display-message');

//Display error messages when form is not filled out
function displayMessage(type, message) {
    messageP.textContent = message;
}

//function performed on click to check form criteria, store blog post
//and direct to blog.html
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    let blogPost = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }

    if (blogPost.username === '') {
        displayMessage('error', 'Enter your username.');
    } else if (blogPost.title === '') {
        displayMessage('error', 'Your blog needs a title!');
    } else if (blogPost.content === '') {
        displayMessage('error', 'You need to write something!');
    } else { 
        
    storeBlogPost(blogPost);
    window.location.href = './blog.html';
        
    }
})






