const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit-button');
const messageP = document.querySelector('#display-message');

function displayMessage(type, message) {
    messageP.textContent = message;
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const blogPost = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }
    // const username = usernameInput.value;
    // const title = titleInput.value;
    // const content = contentInput.value;

    if (username === '') {
        displayMessage('error', 'Enter your username.');
    } else if (title === '') {
        displayMessage('error', 'Your blog needs a title!');
    } else if (content === '') {
        displayMessage('error', 'You need to write something!');
    } else { 
        

    storeBlogPost(blogPost);
    window.location.href = './blog.html';
        
    }
})






