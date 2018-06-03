const CLIENT_ID = "f8cc36e64e5a497bb850446c34c6d7a6";
const REDIRECT_URL = "http://localhost:3000/";
const URL_AUTHORIZE = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&state=8597&redirect_uri=${REDIRECT_URL}`;
const SEARCH_URL = "https://api.spotify.com/v1/search?type=track&q=";

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
        let expiresIn = expiresIn[1];
        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
        window.history.pushState("Access Token", null, "/");
        return accessToken;
      } else {
        window.location.replace(URL_AUTHORIZE);
      }
    }
  },

  search: function(term) {
    const completeSearchURL = SEARCH_URL + term;

    const accessToken = this.getAccessToken();

    const headers = new Headers({
      Authorization: `Bearer ${accessToken}`
    });

    const httpRequestData = {
      method: "GET",
      headers: headers,
      mode: "cors",
      cache: "default"
    };

    fetch(completeSearchURL, httpRequestData)
      .then(response => {
        let arrayResponse = [];

        if (response.status != 200) {
          console.log(
            "Looks like there was a problem. Status code: " + response.status
          );
          return arrayResponse;
        }

        response.json().then(data => {
          console.log(data);
          data.map(track => {
            let mappedTracked = {
              id: track.id,
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              uri: track.uri
            };
            arrayResponse.append(mappedTracked);
          });
          return arrayResponse;
        });
      })
      .catch(err => {
        console.log("Fetch error: ", err);
      });
  }
};

export default Spotify;
