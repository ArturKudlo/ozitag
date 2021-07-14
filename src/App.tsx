import React from 'react';
import './App.css';
import {PageAuth, PageProfile} from "./components/pages";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <PageProfile />
                </Route>
                <Route exact path="/login">
                    <PageAuth />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
