interface GithubUserInfo {
  login: string,
  id: string,
  node_id: string,
  avatar_url: string,
}

export interface GithubAPI {
  getGithubUserInfo(username: string): Promise<GithubUserInfo>
}

declare const githubAPI: GithubAPI;

export default githubAPI;
