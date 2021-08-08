import ContributerCard from './ContributerCard';
import NavSecondary from "./Nav_secondary";
import Data from './Data';
import Footer from './Footer';

export default function Contributers(){
  return(
    <>
    <NavSecondary/>
    <div className = 'cont'>
    <h3>As we said earlier this site is By Community For the Community. Here are our contributers. </h3>
    <div className = "cards_cont" style = {{padding: '3em 0em', display: 'grid'}}>
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
    <Footer/>
    </>
  );
}