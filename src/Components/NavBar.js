import { useState } from 'react';
import Menu from './Menu';

export default function NavBar(){

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
      <Menu/>
      <button 
        style = {{background: "transparent" , border: "none"}}
        onClick = {toggler}>
        <i className="fas fa-bars hamburger"></i>
      </button>
    </div>
    <div className = "hamMenu" style = {{display:display}}><Menu/></div>
    </>
  );
}