import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from './Login';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    let navigate = useNavigate();

    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [server, setServer] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() //prevents the default case from happening (Refreshing the page)
        const userInformation = { username, password }
        console.log(userInformation)

        const headers = {
            'Content-Type': 'application/json',
          }

        axios.post('http://localhost:3000/signup', userInformation,)
          .then((res) => {
            if (res.data==='works') {
                console.log('test')
                return navigate('/login')
            } else {
                return setServer(res.data)
            }
          })
          .catch(function (error) {
            console.log('no');
          });

    }

    return (
    <div className="signup">
        <form className="signup-form" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" onChange={(e) => setUser(e.target.value)} />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="signupbutton">Click me</button>
            <div>{server}</div>
        </form>
    </div>
    )
}

export default Signup;