import React from "react";

const Login = () => {
    return (
        <div className="login">
        <form className="login">
            <label>Username:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <button type="submit" className="signupbutton">Click me</button>
        </form>
    </div>
    )
}

export default Login;