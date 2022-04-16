const axios = require('axios');

/**
 * @typedef GithubUser
 * @property {string} login
 * @property {number} id
 * @property {string} node_id
 * @property {string} avatar_url
 */

/**
 *
 * @param {string} userName
 * @returns {Promise<GithubUser>}
 */
const getGithubUserInfo = (userName) => {
  const url = `https://api.github.com/users/${userName}`;
  return axios
    .get(url)
    .then(response => response.data);
}

module.exports = {
  getGithubUserInfo,
}
