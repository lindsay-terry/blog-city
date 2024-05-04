# blog-city
GIVEN a personal blog
WHEN I load the app,
<!-- THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content. -->
<!-- WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page. -->
<!-- WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form. -->
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
<!-- WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries. -->
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.


<!--> Pseudocode <!-->
//Create HTML Landing page
//Landing page contains form with labels and inputs for username, blog title, and blog content.
//The form gets submitted and the data stored to localStorage
//Automatically redirects to posts page upon submit
//Errors come up if username, title, or content = ''
//Message populates that tells you to complete the form



//Posts page:
//Header, light/dark mode toggle, and "back" button
//Light/dark mode toggle changes the page content's styles to reflect the selection
Clicking back button redirects to main landing page to input more blog entries
Viewing main content, list of blog posts that are pulled from local storage
view local storage: present with a JSON array of blog post objects, (console.log?)
What does taking a closer look at a single blog entry look like? 
--Seeing the title, content, and author of the post
Link to developer's portfolio in footer


1. create HTMl

Image by <a href="https://pixabay.com/users/aftermathkla-35149745/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7943648">AftermathKla</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7943648">Pixabay</a>