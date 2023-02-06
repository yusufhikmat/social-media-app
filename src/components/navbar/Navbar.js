import React from 'react'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <Link className='logo' to ="/"><span>Hikmah</span></Link>
            <HomeOutlinedIcon />
            <ModeNightOutlinedIcon />
            <AppsOutlinedIcon />
            <div className='search'>
            <SearchIcon />
                <input type="text" placeholder='search'/>
            </div>
        </div>
        <div className='right'>
            <PersonIcon />
            <EmailIcon />
            <NotificationsNoneIcon />
            <div className='user'>
            <img src="https://images.unsplash.com/photo-1670272498425-e13ce4fcf5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="myPicture" />
                <span>yusuf hikmah</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar