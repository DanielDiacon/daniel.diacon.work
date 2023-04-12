// dark mode <=========>

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
   // 1. Add the class to the body
   document.body.classList.add('darkmode');
   // 2. Update darkMode in localStorage
   localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
   // 1. Remove the class from the body
   document.body.classList.remove('darkmode');
   // 2. Update darkMode in localStorage 
   localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
   enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
   // get their darkMode setting
   darkMode = localStorage.getItem('darkMode');

   // if it not current enabled, enable it
   if (darkMode !== 'enabled') {
      enableDarkMode();
      // if it has been enabled, turn it off  
   } else {
      disableDarkMode();
   }
});


// like <=========>
// Get all objects with class "clickable"
const likeButtons = document.querySelectorAll('#toggle-like');

// Add click event listener to each like button
likeButtons.forEach(function (button) {
   button.addEventListener('click', function () {
      // Toggle "active" class on clicked button
      button.classList.toggle('active');

      // Get post ID from data attribute
      const postId = button.dataset.postId;

      // Get current like status of post from local storage
      const postLikes = JSON.parse(localStorage.getItem('postLikes')) || {};
      const postLikeStatus = postLikes[postId] || false;

      // Update like status of post in local storage
      postLikes[postId] = button.classList.contains('active');
      localStorage.setItem('postLikes', JSON.stringify(postLikes));
   });

   // Retrieve like status of post from local storage on page load
   const postId = button.dataset.postId;
   const postLikes = JSON.parse(localStorage.getItem('postLikes')) || {};
   const postLikeStatus = postLikes[postId] || false;
   button.classList.toggle('active', postLikeStatus);
});
