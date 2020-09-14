import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AmiibosPage from "./pages/AmiibosPages/AmiibosPage";
import HomePage from "./pages/HomePage/HomePage";
import MenuComponent from "./shared/components/MenuComponent/MenuComponent";
import GameSeriesPage from "./pages/GameSeriesPages/GameSeriesPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
      <div className="App">
            <Router>
                <div>
                    <MenuComponent/>
                </div>
                <Switch>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                    <Route path="/amiibos">
                        <AmiibosPage/>
                    </Route>
                    <Route path="/gameseries">
                        <GameSeriesPage/>
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
