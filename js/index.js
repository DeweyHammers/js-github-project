document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input');
    const userList = document.querySelector('#user-list');
    const reposList = document.querySelector('#repos-list');

    const displayRepos = (repos) => {
      repos.forEach(repo => {
        const repoIteam = document.createElement('li');
        const repoName = document.createElement('h2');
        const repoLanguage = document.createElement('p');
        const repoLink = document.createElement('a');

        repoName.innerText = repo.name;
        repoLanguage.innerText = `Language: ${repo.language}`;
        repoLink.href = repo.html_url;
        repoLink.innerText = 'Link to repository';

        repoIteams = [repoName, repoLanguage, repoLink];

        repoIteams.forEach(item => {
          repoIteam.appendChild(item);
        });

        reposList.appendChild(repoIteam);
      });
    }

    const displayUser = (user) => {
      const username = document.createElement('h1');
      const userProfile = document.createElement('img');
      const userLink = document.createElement('a');
      
      username.innerText = user.login;
      userProfile.src = user.avatar_url;
      userLink.innerText = 'Link to Github';
      userLink.href = user.html_url;
      
      userIteams = [username, userProfile, userLink]

      userIteams.forEach(item => {
        const userIeam = document.createElement('li');
        userIeam.appendChild(item);
        userList.appendChild(userIeam);
      });

      fetch(`https://api.github.com/users/${username.innerText}/repos`)
      .then(response => response.json())
      .then(json => displayRepos(json));
    }

    fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
    .then(json => displayUser(json));

    input.value = '';
  });
});