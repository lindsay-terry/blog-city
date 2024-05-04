function storeBlogPost(blogPost) {
    let blogPosts = [JSON.parse(localStorage.getItem('blogPosts'))];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts)); 
}

function getBlogPosts() {
    return JSON.parse[(localStorage.getItem('blogPosts'))];
}