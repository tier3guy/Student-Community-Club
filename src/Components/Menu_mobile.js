import { Link } from "react-router-dom";

export default function Menu_mobile(){
  return(
    <>
      <ul className = 'menu secondHam'>
        <Link to = '/' className = 'btn_nav'>Home</Link>
        <Link to = '/resources' className = 'btn_nav' onClick = {window.scrollTo(0,0)}>Resources</Link>
        <Link to = '/contributers' className = 'btn_nav' onClick = {window.scrollTo(0,0)}>Contributers</Link>
        <a className = 'btn_nav' rel = "noreferrer" href= "https://docs.google.com/document/d/18HKtYRtHYU5YO_tLJ8ShqGrKpgi9zBjLEgImSEDcFuc/edit?usp=sharing" target="_blank">NOTICE</a>
      </ul>
    </>
  );
}