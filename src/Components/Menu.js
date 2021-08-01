import { Link } from "react-router-dom";



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
        <Link to = '/Students-Community-Club' className = 'btn_nav' onClick = {goToHome}>Home</Link>
        <button className = 'btn_nav' onClick = {goToAbout}>About</button>
        <button className = 'btn_nav' onClick = {goToContact}>Help Community</button>
        <Link to = '/resources' className = 'btn_nav'>Resources</Link>
        <Link to = '/contributers' className = 'btn_nav'>Contributers</Link>
      </ul>
    </>
  );
}