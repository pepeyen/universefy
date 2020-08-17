export default function getAuthValues() {
  let token = window.location.hash.substr(9);
  let authTokens = {
    access_token: '',
    refresh_token: ''
  }
  if (token) {
      const o = Object.fromEntries(new URLSearchParams(token));

      authTokens.access_token = o.access_token;
      authTokens.refresh_token = o.refresh_token;

      return authTokens;
  }
}
