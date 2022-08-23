import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar({avatar}) {

  const user = useSelector(selectUser);


  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic} </p>
    </div>
  )

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />   {/* Cover photo at the top */}
            <Avatar src={user ? user.photoUrl : avatar} className='sidebar__avatar'>{user.email[0]}</Avatar>          {/* Avatar after the cover photo , {user.email[0]}-> If user dont have dp, then use  first letter of GMAIL (i.e propixel= 'P')*/}
            <h2>{user.displayName}</h2>
            <h4>{user.email }</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,543</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on Post</p>
                <p className='sidebar__statNumber'>2,876</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>

            {recentItem('reactJS')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>

    </div>
  )
}

export default Sidebar
