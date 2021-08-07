import MenuSeconadary from './Menu_seconadary';
import { useState } from 'react';

export default function NavSecondary(){

  const [ham,setHam] = useState(false);
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
      <MenuSeconadary/>
    </div>
    <button 
        style = {{background: "transparent" , border: "none" , outline:"none"}}
        onClick = {toggler}>
        <i className="fas fa-bars hamburger"></i>
      </button>
    <div className = "hamMenu" style = {{display:display}}><MenuSeconadary/></div>
    </>
  );
}