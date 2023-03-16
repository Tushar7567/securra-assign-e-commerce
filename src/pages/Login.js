import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser}) => {
  const user = "Tester";
  const pwd = "password";

  
  const [username ,setUsername] = useState('')
  const [password ,setPassword] = useState('')

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleOnClick = () => {
    if (username === user && password === pwd) {
      // navigate to landing page
      setUser(username)
      console.log("successful")
      navigate('/home')
    }else{
      setError('Invalid Credentials')
    }
    // else throw error as login creentials invalid
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* <h3>Login</h3> */}
        <h2>Login</h2>
        <input type="text" placeholder="Username" onChange={handleUsername} required />
        <input type="password" placeholder="Password" onChange={handlePassword} required />
        {/* Error message if login credentials invalid */}
        {error && error}
        <button onClick={handleOnClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
