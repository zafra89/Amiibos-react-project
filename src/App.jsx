import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AmiibosPage from "./pages/AmiibosPages/AmiibosPage";
import HomePage from "./pages/HomePage/HomePage";
import MenuComponent from "./shared/components/MenuComponent/MenuComponent";

function App() {
  return (
      <div className="App">
            <Router>
                <div>
                    <MenuComponent/>
                </div>
                <Switch>
                    <Route path="/amiibos">
                        <AmiibosPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
      </div>
  );
}
export default App;
