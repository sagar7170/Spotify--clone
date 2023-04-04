import React from 'react'
import './Body.css'
import Header from './Header'
import { useStateValue } from './StateProvider'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body() {
  const [{ discover_weekly,spotify }, dispatch] = useStateValue();

  const playSong = (id) => {
    console.log(id)
    spotify.play({uris: `spotify:track:${id}`})
      .then((res) => {
        console.log(res);
      });
  };

  // const playSong = () =>{
  //   console.log("playsongs");
  //   spotify.getPlaylist(`37i9dQZF1DWUSyphfcc6aL`).then((user)=>{
  //     console.log(user);
  //   })
  // }
  
  return (
    <div className='body'>
      <Header  />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icon">
          <PlayCircleFilledIcon className='body__shuffle' />
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon />
        </div>

        {/* list of songs */} 
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body