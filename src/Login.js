import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux/es/exports'    // IMPORTANT: Need to import manually. Automatically will not import

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoURL 
      }))
    }).catch(error => alert(error)); 
  }

  const register = () => {
    if(!name){
      return alert("Please enter a full name")
    }
     
    // this is the powerfull thing about the firebase database, which will create the email and password on the backend
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {  // userAuth is a variable
      userAuth.user.updateProfile({       // userAuth.user.updateProfile --> userAuth is variable, user is a object, updateProfile is a firebase built in name
        displayName: name,                // displayName, photoURL --> These keys are refer to firebase built in name, so byheart
        photoUrl: profilePic              // name, profilePic --> is the state name
      })
      .then(() => {
        dispatch(login({                // need to push the user at this point into the redux store, means 'Dispatch' login action. I defined above --> const dispatch = useDispatch();
          email: userAuth.user.email,   
          uid: userAuth.user.uid,        // uid is a built in PASSWORD name of firebase. It stores as 'hash value'
          displayName: name,
          photoUrl: profilePic
        }));                            
      })
    }).catch((error) => alert(error));
  }

  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="LinkedIn Logo"  />

      <form>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)' required/>
        <input type="text" value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic URL (Optional) ' />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}  placeholder='Password' required/>

        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a Member? <span className='login__register' onClick={register}>Register Now</span></p>


    </div>

    
  )
}

export default Login
