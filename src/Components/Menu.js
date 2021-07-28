import Contributers from './Contributers';
import Resources from './Resources';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function Menu(){

  const goToAbout = () => {
    window.scrollTo(0,570);
  }
  const goToContact = () => {
    window.scrollTo(0,1300);
  }
  const goToHome = () => {
    window.scrollTo(0,0);
  }

  return(
    <>
      <ul className = 'menu'>
        <button className = 'btn_nav' onClick = {goToHome}>Home</button>
        <button className = 'btn_nav' onClick = {goToAbout}>About</button>
        <button className = 'btn_nav' onClick = {goToContact}>Contact</button>
        <Router>
          <button className = 'btn_nav'>
            <Link to="/contributers" style= {{textDecoration: 'none'}}>
            Contributers
            </Link>
          </button>
          <button className = 'btn_nav'>
            <Link to="/resources" style= {{textDecoration: 'none'}}>
            Resources
            </Link>
          </button>
        </Router>
      </ul>
    </>
  );
}