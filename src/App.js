
import './App.css';
import Login from './Components/Login';
import { useEffect } from 'react';
import { getTokenFromUrl } from './Components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from './Components/StateProvider';
import Player from './Components/Player';

const spotify = new SpotifyWebApi();
function App() {
const [{user,token} , dispatch] = useStateValue();
  useEffect(()=>{
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;
    
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
    
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
       
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists().then((Playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: Playlists,
        });
      });
    
      spotify.getPlaylist('0xF0eHm3eguBqBvgVyQ3UB').then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
        )
       spotify.play()
        dispatch({
          type: "SET_SPOTIFY",
          spotify: spotify,
        });
    }

  },[token, dispatch]);
  
  return (
    <div className="App">
       {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
