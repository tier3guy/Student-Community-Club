import { useState } from 'react';
import Menu from './Menu';
import MenuSeconadary from './Menu_seconadary';

export default function NavBar(){

  const [ham,setHam] = useState(true);
  const [display,setDisplay] = useState("none");
  const toggler = () => {
    setHam(!ham);
    if(ham){
      setDisplay("block");
    }
    else{
      setDisplay("none");
    }
  }

  return(
    <>
    <div className = 'navbar'>
      <h3 style= {{fontWeight:'bolder'}}>Student's Community Club</h3>
      <Menu/>
      <button 
        style = {{background: "transparent" , border: "none", outline:"none" ,  cursor: "pointer"}}
        onClick = {toggler}>
        <i className="fas fa-bars hamburger"></i>
      </button>
    </div>
    <div className = "hamMenu" style = {{display:display , cursor: "pointer"}}><MenuSeconadary/></div>
    </>
  );
}