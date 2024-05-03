const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const blogPost = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value
    }

    localStorage.setItem(('blog-post'), JSON.stringify(blogPost));

    
})