import { Link } from "react-router-dom";

export default function MenuSeconadary(){
  return(
    <>
      <ul className = 'menu secondHam'>
        <Link to = '/' className = 'btn_nav'>Home</Link>
        <Link to = '/resources' className = 'btn_nav' onClick = {window.scrollTo(0,0)}>Resources</Link>
        <Link to = '/contributers' className = 'btn_nav' onClick = {window.scrollTo(0,0)}>Contributers</Link>
      </ul>
    </>
  );
}