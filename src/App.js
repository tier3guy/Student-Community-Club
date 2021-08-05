import Contributers from './Components/Contributers';
import Resources from './Components/Resources';
import Home from './Components/Home';

import { Route,Switch } from "react-router-dom";
import { useEffect, useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";

function App() {

  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },4000)
  },[])

  if(loading){
    return <div className = "loader"><BeatLoader className = "loader" color={"rgba(138, 22, 1, 0.578)"} loading={loading} size={20} /></div>;
  }
  else{
    return(
      <>
        <div id="notice"><a rel = "noreferrer" href= "https://docs.google.com/document/d/18HKtYRtHYU5YO_tLJ8ShqGrKpgi9zBjLEgImSEDcFuc/edit" target="_blank">NOTICE</a></div>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/contributers' component = {Contributers}/>
          <Route exact path = '/resources' component = {Resources}/>
        </Switch>
      </>
    );
  }
}

export default App;
