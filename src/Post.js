import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

// forwardRef is react-flip-move function https://github.com/joshwcomeau/react-flip-move 2:53:00
// forwardRef(({...}, ref) => {return ( <div ref={ref} > ... ) })   - syntax
const Post = forwardRef(({ name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl} > {name[0]} </Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
            <InputOption Icon={ChatOutlinedIcon} title="Comment " color="gray" />
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
    </div>
  )
})

export default Post



// Run this: npm i -S react-flip-move: 2:52:54 : used for animation