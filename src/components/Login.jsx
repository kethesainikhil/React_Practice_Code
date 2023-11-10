import React, { useContext, useState } from 'react'
import userContext from '../context/userContext';

const Login = () => {
const[userName,setUsername] = useState('');
const [password, setpassword] = useState('')
const {setUser} = useContext(userContext)
const handleSubmit = (e) =>{
    e.preventDefault();
    setUser({userName,password})
    console.log({userName,password})
}
  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
      <input type="password"
      value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password' />
      <button type='submit' onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
