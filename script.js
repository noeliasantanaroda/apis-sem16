document.addEventListener('DOMContentLoaded', () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
          const postsContainer = document.getElementById('placeHolder');
          data.forEach(post => {
              const postElement = document.createElement('div');
              postElement.innerHTML = `
                  <h2>${post.title}</h2>
                  <p>${post.body}</p>
              `;
              postsContainer.appendChild(postElement);
          });
      })
      .catch(error => console.error('Error:', error));
});
