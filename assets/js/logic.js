let totalPosts = JSON.parse(localStorage.getItem('totalPosts')) || [];

function storeBlogPost(blogPost) {
    totalPosts.push(blogPost);
    localStorage.setItem('totalPosts', JSON.stringify(totalPosts));
  
}

function getBlogPosts() {
    return JSON.parse(localStorage.getItem('totalPosts')) || [];

}



