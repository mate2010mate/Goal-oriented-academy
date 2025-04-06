document.getElementById('search-btn').addEventListener('click', getUser);

async function getUser() {
  const username = document.getElementById('username').value;
  if (!username) return;

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error('User not found');

    const data = await res.json();
    updateProfile(data);
  } catch (error) {
    alert(error.message);
  }
}

function updateProfile(data) {
  document.getElementById('profileCard').style.display = 'block';
  document.getElementById('avatar').src = data.avatar_url;
  document.getElementById('name').textContent = data.name || 'No Name';
  document.getElementById('login').textContent = '@' + data.login;
  document.getElementById('bio').textContent = data.bio || 'This profile has no bio';
  document.getElementById('joined').textContent = `Joined ${new Date(data.created_at).toDateString()}`;
  document.getElementById('repos').textContent = data.public_repos;
  document.getElementById('followers').textContent = data.followers;
  document.getElementById('following').textContent = data.following;
  document.getElementById('location').textContent = data.location || 'Not Available';
  document.getElementById('twitter').textContent = data.twitter_username ? `@${data.twitter_username}` : 'Not Available';
  document.getElementById('blog').textContent = data.blog || 'Not Available';
  document.getElementById('company').textContent = data.company || 'Not Available';
}
