import Hero from './Hero';
import About from './AboutUs';
import Contact from './Contact';
import Contributers from './Contributers';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Menu(){
  return(
    <>
    <Router>
      <ul className = 'menu'>
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/about"> About </Link> </li>
        <li> <Link to="/contact"> Contact Us </Link> </li>
        <li> <Link to="/contributers"> Contributers </Link> </li>
      </ul>
    </Router>
    </>
  );
}