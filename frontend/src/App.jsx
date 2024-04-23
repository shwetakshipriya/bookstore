import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses';
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
  
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/course" element = {<Courses/>}/>
    </Routes>

    
    </>
  )
}

export default App