let ACCESS_TOKEN = "";

const Spotify = {
  getAccessToken: function(){
    if(ACCESS_TOKEN != undefined || ACCESS_TOKEN !== ""){
      return ACCESS_TOKEN;
    }
  }
};

export default Spotify;

