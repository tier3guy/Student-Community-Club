import Menu from './Menu';

export default function NavBar(){

  const headerColor = '#171010'
  return(
    <>
    <div className = 'navbar'>
      <h3 style = {{color:headerColor}}>STUDENT'S COMMUNITY CLUB</h3>
      <Menu/>
    </div>
    </>
  );
}