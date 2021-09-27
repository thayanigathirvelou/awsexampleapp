import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login";

import Dashboard from './components/Dashboard/Dashboard';
import Index from './components/Index/Index';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
library.add( faCheckSquare, faCoffee)
function App() {
  return (


    
      <BrowserRouter>
        <div>
      
        
            <Route exact path='/' component={Index} />
            <Route path="/sign-in/:id" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/kk" component={NotFound} />
           
            </div>
    </BrowserRouter>
  );
}

export default App;
