import React from 'react'
import './HeaderOption.css'
import {Avatar} from "@mui/material"    // U should include this one
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOption({ avatar, Icon, title, onClick}) {   // { avatar, Icon, title} --> These are short ways of passing props..     Icon --> Passing component(materialUI Icon), 
  
  const user = useSelector(selectUser);
  
  return (
    <div onClick={onClick} className='headerOption'>
        { Icon && <Icon className='headerOption__icon' /> }   {/* Renders only if we pass the icon component */ }
        { avatar && <Avatar className='headerOption__icon' src={user ? user.photoUrl : avatar} /> }      {/* 2:48:00 */}
        <h3 className='headerOption__title'>{title}</h3>            {/* This is called JSX< essentially mixing Html and JS together */ }

    </div>
  );
}

export default HeaderOption
