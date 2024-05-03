const backButton = document.querySelector('#back-button')

//Send user back to home page 
backButton.addEventListener('click', function(event) {
    window.location.href = './index.html';
})