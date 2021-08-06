import Menu from './Menu';

export default function NavBar(){

  return(
    <>
    <div className = 'navbar'>
      <h3 style= {{fontWeight:'bolder'}}>Student's Community Club</h3>
      <Menu/>
      <i className="fas fa-bars hamburger"></i>
    </div>
    </>
  );
}