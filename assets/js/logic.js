const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit-button');


//Stores blog post object to local storage as a string and sends user to blog page
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const blogPost = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value
    }

    localStorage.setItem(('blog-post'), JSON.stringify(blogPost));
    window.location.href = './blog.html';
    
})