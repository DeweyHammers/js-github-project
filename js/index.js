document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input');
    const userList = document.querySelector('#user-list')

    const displayUser = (user) => {
      const username = document.createElement('li');
      const userProfile = document.createElement('img');
      const userLink = document.createElement('a');

      username.innerText = user.login;
      userProfile.src = user.avatar_url;
      userLink.innerText = 'Link to Github';
      userLink.href = user.html_url;

      userList.appendChild(username);
      userList.appendChild(userProfile);
      userList.appendChild(userLink);
    }

    fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
    .then(json => displayUser(json));

    input.value = '';
  });
});