import React from 'react'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import BrowseGalleryOutlinedIcon from '@mui/icons-material/BrowseGalleryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import './Leftbar.scss'
const Leftbar = () => {
  return (
    <div className='leftbar'>
    <div className='container'>
      <div className='menu'>
        <div className='user'>
        
          <Person2OutlinedIcon />
          <span>Yusuf Hikmah</span>
        </div>
        <div className='item'>
          <GroupAddOutlinedIcon />
          <span>Friends</span>
        </div>
        <div className='item'>
          <Diversity3Icon />
          <span>Groups</span>
        </div>
        <div className='item'>
          <StorefrontOutlinedIcon />
          <span>Market</span>
        </div>
        <div className='item'>
          <AccessTimeIcon />
          <span>Watch</span>
        </div>
        <div className='item'>
          <Diversity3Icon />
          <span>Memories</span>
        </div>
        </div>
        <hr />
          <div className='menu'>
            <span>Your Shortcuts</span>
            <div className='item'>
          <EventAvailableOutlinedIcon />
          <span>Events</span>
        </div>
        <div className='item'>
          <SportsEsportsOutlinedIcon />
          <span>Gaming</span>
        </div>
        <div className='item'>
          <BrowseGalleryOutlinedIcon />
          <span>Gallery</span>
        </div>
        <div className='item'>
          <OndemandVideoOutlinedIcon />
          <span>Videos</span>
        </div>
        <div className='item'>
          <MessageOutlinedIcon />
          <span>Messages</span>
        </div>
          </div>
          <hr />
          <div className='menu'>
            <span>Your memories</span>
            <div className='item'>
          <Diversity3Icon />
          <span>Memories</span>
        </div>
        <div className='item'>
          <Diversity3Icon />
          <span>Memories</span>
        </div>
       
          </div>
      </div>
    </div>
    
  )
}

export default Leftbar