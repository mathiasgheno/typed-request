const { getGithubUserInfo: githubJsDocs } = require('./gitHubService1/gitHubService');
const { getGithubUserInfo: githubTSDefined } = require('./gitHubService2/gitHubService');

githubJsDocs('mathiasgheno').then((userInfo) => console.log(`ID: ${userInfo.id}`))
githubTSDefined('mathiasgheno').then((userInfo) => console.log(`Avatar URL: ${userInfo.avatar_url}`))
