import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Stocks from './Stocks';


function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Routes>
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path="/stocks" element={<Stocks />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;