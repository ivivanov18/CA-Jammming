const CLIENT_ID = "f8cc36e64e5a497bb850446c34c6d7a6";
const REDIRECT_URL = "http://localhost:3000/";
const URL_AUTHORIZE = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&state=8597&redirect_uri=${REDIRECT_URL}`;

let accessToken = "";

const Spotify = {
  getAccessToken: function() {
    if (accessToken != undefined || accessToken !== "") {
      return accessToken;
    } else {
      const newAccessToken = window.location.href.match(/access_token=([^&]*)/);
      const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
      if (newAccessToken && expiresIn) {
        accessToken = newAccessToken[1];
        expiresIn = expiresIn[1];
        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
        window.history.pushState("Access Token", null, "/");
        return accessToken;
      } else {
        window.location.replace(URL_AUTHORIZE);
      }
    }
  }
};

export default Spotify;
