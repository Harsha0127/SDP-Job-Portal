import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import About from './About'
import Home from './Home';
import './style.css'
import Registration from '../jobseeker/Registration';
import JobSeekerLogin from '../jobseeker/JobSeekerLogin';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';

export default function MainNavBar() 
{
  return (
    <div>
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/registration">Registration</Link>
                <Link to="/jobseekerlogin">JobSeekerLogin</Link>
                <Link to="/adminlogin">AdminLogin</Link>
                <Link to="/contact">Contact</Link>
                
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/jobseekerlogin" element={<JobSeekerLogin/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/adminlogin" element={<AdminLogin/>}/>
        </Routes>



    </div>
  )
}
