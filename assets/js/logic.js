const newPostArray = [];
function storeBlogPost(blogPost) {
    localStorage.setItem('blogPost', JSON.stringify(blogPost));
}

function getBlogPost() {
    let newPost = JSON.parse(localStorage.getItem('blogPost'));
    newPostArray.push(newPost);
}