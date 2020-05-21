const URL = "http://api.github.com/users";

export async function getUsers(params) {
  const response = await fetch(URL);
  const users = await response.json();
  return users;
}

export async function getUser(user) {
  const response = await fetch(`${URL}/${user}`);
  const data = await response.json();
  return data;
}

export async function getUserRepos(user) {
  const response = await fetch(`${URL}/${user}/repos`);
  const repos = await response.json();
  return repos;
}
