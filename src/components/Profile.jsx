import React, { useContext, useState } from 'react'
import userContext from '../context/userContext';

const Profile = () => {
    const [userInfo,setUserInfo] = useState({});
    const{user} = useContext(userContext);
    
  return (
    <div>
        {
            (!user)?<h1>login</h1>:<h1>{user.userName}</h1>
        }
    </div>
  )
}

export default Profile
