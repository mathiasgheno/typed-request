const axios = require('axios');

const getGithubUserInfo = (userName) => {
  const url = `https://api.github.com/users/${userName}`;
  return axios
    .get(url)
    .then(response => response.data);
}

module.exports = {
  getGithubUserInfo,
}
