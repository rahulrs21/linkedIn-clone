import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';                                
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {  } from '@mui/base';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import FlipMove from 'react-flip-move';

function Feed() {

  const user = useSelector(selectUser);


  const [input, setInput] = useState('');

  const [posts, setPosts] = useState([])

  useEffect(() =>{
    // .collection is connecting to a 'firestore database' in firebase.
    // .onSnapshot()   gives realtime listener connection to javascript array. Inside parameter helps everytime posts gets added to/delete to, changes or anything, It'll give the snapshot
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
    
      // In firebase, there are many docs, in that we chose
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    
    );  
         
  }, [])

  const sendPost = (e) => {
    e.preventDefault();    // It prevent loading
    
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.profileUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    });

    setInput('');   // after submit, need to clear whatever written in text field
    
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />

            <form>
              <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Start typing your post' />
              <button onClick={sendPost} type="submit">Send</button>
            </form>
        </div>

        <div className="feed__inputOptions">
          {/* Import options */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#COCBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write a article" color="#7FC15E" />

        </div>
      </div>


      {/* Posts   <FlipMove> included in posts, Normally for animation*/}
      <FlipMove>   
        {posts.map( ( { id, data: {name, description, message, photoUrl} } ) => 
          <Post 
            key = {id}    // key is important whenever u rendering out a list, 
            name = {name}
            description = {description}
            message = {message}
            photoUrl = {photoUrl}
          />
        )}
      </FlipMove>

    </div>
  )
}

export default Feed
