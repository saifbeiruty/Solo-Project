import React, { useState } from "react";

const Signup = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() //prevents the default case from happening (Refreshing the page)
        const userInformation = { user, password }
        console.log(userInformation)
    }

    return (
    <div className="signup">
        <form className="signup-form" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" onChange={(e) => setUser(e.target.value)} />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="signupbutton">Click me</button>
        </form>
    </div>
    )
}

export default Signup;