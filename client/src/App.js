import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';


function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Routes>
                <Route path='/signup' element={<Signup />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;