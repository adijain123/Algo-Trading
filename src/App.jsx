
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Discuss from './components/Discuss';
import Backtesting from './components/Backtesting';
import StrategyBuilder from './components/StrategyBuilder';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignupFormDemo } from '../UI/SignupFormDemo';
import { Loginpage } from '../UI/Loginpage';
import Footer from './components/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /><Footer/></>,
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
     element: <><Navbar/><About /><Footer/></>,
    },
    {
      path: "/discuss", 
      element: <><Navbar/><Discuss /><Footer/></>,
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
