import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from './components/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /></>,
    },
    {
     path: "/about", 
     element: <><Navbar/><About /></>,
    },
    
    {
      path: "/SignUp", 
      element: <> <SignUp /></>,
     },

  ]);
  return (
    <>
    <RouterProvider router={router} />
   </>
  )
}

export default App
