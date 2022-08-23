import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {

    // pull the data from the datastore
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if( userAuth ) {
                // user is logged in
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL               
                    })
                )
            } else {
                // user is logged out
                dispatch(logout());
            }
        })
        // onAuthStateChanged() - This is the listener which goes ahead and listen to any sort of authentication
        //userAuth - is a callback
    }, [])

    return ( 
        <div className="app" >
 
            <Header />

            
            {!user ? ( <Login /> ) : (
               
                <div className='app__body'>
                    
                    <Sidebar />
                    
                    <Feed />
                    
                    <Widgets /> 
                </div>
            )}

        </div>
    );
}

export default App;





// {/* If there is 'no user', I wanna render login page, otherwise render out rest of these.. */}








// 1. When reload, dp disappears, Sidebar and top right




// FIREBASE DEPLOY command
// Note: Click  '+down' symbol on termial to right side. In that select 'command prompt'. Then run these codes.

// 1. firebase login
// 2. firebase init
//      In this click --> Hosting: Configure and deploy Firebase Hosting sites  --> Press SPACE BAR then Enter.
// 3. After this click --> Use an Existing Project
//     select your project name: linkedin-clone-yt
// 4. what do you want as use as your public direactory: --> type 'build' press enter and type 'Y' (y/n) 
// 5. setup automatic builds and deploy with Github? (y/N) --> Press 'N' for now
//     After this u recv  'Firebase Initialization complete'
// 6.npm run build

// 7. At last.. firebase deploy



// https://linkedin-clone-yt-6c800.web.app -----------> This is the MAIN Link (working)
// https://linkedin-clone-yt-6c800.firebaseapp.com/ ----> This is working