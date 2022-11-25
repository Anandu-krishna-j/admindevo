import React, { useState } from 'react'
import './login.css'

function LoginContainers() {
  const [loginData, setLoginData] = useState({ Username: '', Password: '' });

  const handleSubmit =(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
    console.log(loginData);
    
  }
  return (
    <div className='login-container'>
      <form className="login-card">
        <h2>Login</h2>
        <input type="text" name="Username" id="" value={loginData.Username} onChange={handleSubmit} placeholder='Username' />
        <input type="password"  pattern=".{8,}" title='Minimum 8 Charecters Required' name="Password" id="" value={loginData.Password} onChange={handleSubmit} placeholder='Password' />
        <button type='submit' className='login'>Login</button>
      </form>
    </div>
  )
}
export default LoginContainers