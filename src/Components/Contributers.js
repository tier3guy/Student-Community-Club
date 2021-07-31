import NavBar from './NavBar';
import Footer from './Footer';
import ContributerCard from './ContributerCard';
import Data from './Data';

export default function Contributers(){
  return(
    <>
    <div className = 'cont'>
    <h3>As we said earlier this site is By Community For the Community. Here are our contributers. </h3>
    <div style = {{padding: '3em 0em', display: 'grid',gridTemplateColumns: 'auto auto auto'}}>
      {
        Data.map((object) => {
            return(
              <ContributerCard name = {object.name}
                               college = {object.college}
                               branch = {object.branch}/>
            );
          }
        )
      }
    </div>
    </div>
    </>
  );
}