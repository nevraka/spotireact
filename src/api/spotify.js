export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000';
const clientId = '10a950086cab4cb7b5a5bdad26f516eb';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-playing',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
  // console.log(window.location.hash);
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      //#accessToken=mysupersecretkey&name=sonny&abc
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      console.log(JSON.stringify(initial));
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
