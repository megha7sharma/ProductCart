import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';


function App() {
  return (
   <Router>    
       <Switch>
         <Route path="/dashboard">
           <Dashboard />
         </Route>
         <Route exact path="/">
           <Home />
         </Route>
       </Switch>
    
   </Router>
  );
}

export default App;
