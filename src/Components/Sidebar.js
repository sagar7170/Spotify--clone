import React, { useEffect } from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from './StateProvider';
import axios from 'axios';


function Sidebar() {
    const [{playlists,token},dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
            <SidebarOption Icon={<HomeIcon />} title="Home" />
            <SidebarOption Icon={<SearchIcon />} title="Search" />
            <SidebarOption Icon={<LibraryMusicIcon />} title="Your Library" />
            <br />
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map((playlist)=>(
                <SidebarOption title={playlist.name}/>
            ))}
        </div>
    )
}

export default Sidebar