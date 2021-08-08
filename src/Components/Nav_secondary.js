import MenuSeconadary from './Menu_seconadary';
import { useState } from 'react';

export default function NavSecondary(){

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
    <div className = 'navbar secondary'>
      <h3 style= {{fontWeight:'bolder'}}>Student's Community Club</h3>
      <MenuSeconadary/>
    <button 
        style = {{background: "transparent" , border: "none" , outline:"none"}}
        onClick = {toggler}>
        <i className="fas fa-bars hamburger_secondary"></i>
    </button>
    </div>
    <div className = "hamMenu" style = {{display:display}}><MenuSeconadary/></div>
    </>
  );
}