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
   <div id="notice"><a rel = "noreferrer" href= "https://docs.google.com/document/d/18HKtYRtHYU5YO_tLJ8ShqGrKpgi9zBjLEgImSEDcFuc/edit" target="_blank">NOTICE</a></div>
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
