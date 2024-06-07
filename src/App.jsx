import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Backtesting from './components/Backtesting';
import StrategyBuilder from './components/StrategyBuilder';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignupFormDemo } from '../UI/SignupFormDemo';
import { Loginpage } from '../UI/Loginpage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /></>,
    },

    {
      path: "/backtesting", 
      element: <><Navbar/><Backtesting /></>,
     },

     {
      path: "/strategybuilder", 
      element: <><Navbar/><StrategyBuilder /></>,
     },

    {
     path: "/about", 
     element: <><Navbar/><About /></>,
    },
    
    {
      path: "/signup", 
      element: <> <SignupFormDemo /></>,
     },
     {
      path: "/login", 
      element: <> <Loginpage /></>,
     },

  ]);
  return (
    <>
    <RouterProvider router={router} />
   </>
  )
}

export default App
