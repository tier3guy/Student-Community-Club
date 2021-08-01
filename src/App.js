import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Contributers from './Components/Contributers';
import Resources from './Components/Resources';
import Home from './Components/Home';

import { Route,Switch } from "react-router-dom";

function App() {
  return (
    <>
   <NavBar/>
    <Switch>
      <Route exact path = '/Students-Community-Club' component = {Home}/>
      <Route exact path = '/contributers' component = {Contributers}/>
      <Route exact path = '/resources' component = {Resources}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
