import React, { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();

    const [userInfoName, setUserInfoName] = useState();
    const [userInfoPass, setUserInfoPass] = useState();

    const handleSubmit2 = (e) => {
        e.preventDefault() //prevents the default case from happening (Refreshing the page)
        const userInformation = { userInfoName, userInfoPass }
        console.log(userInformation)

        const headers = {
            'Content-Type': 'application/json',
          }

        axios.post('http://localhost:3000/login', userInformation)
          .then((res) => {
              console.log(res)
            if (res.data==='Success') {
                console.log('test')
                Cookies.set("username", userInfoName)
                return navigate('/stocks')
            } else {
                return setServer(res.data)
            }
          })
          .catch(function (error) {
            console.log('no'); 
          });
        }

    return (
        <div className="login">
        <form className="login" onSubmit={handleSubmit2}>
            <label>Username:</label>
            <input type="text" onChange={e => setUserInfoName(e.target.value)}/>
            <label>Password:</label>
            <input type="password" onChange={e => setUserInfoPass(e.target.value)} />
            <button type="submit" className="signupbutton">Click me</button>
        </form>
    </div>
    )
}


export default Login;