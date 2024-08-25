// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
