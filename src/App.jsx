import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AmiibosPage from "./pages/AmiibosPages/AmiibosPage";
import HomePage from "./pages/HomePage/HomePage";
import MenuComponent from "./shared/components/MenuComponent/MenuComponent";
import GameSeriesPage from "./pages/GameSeriesPages/GameSeriesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AmiiboDetail from "./pages/AmiiboDetail/AmiiboDetail";
import {darkTheme, lightTheme} from "./shared/Styles/Themes";
import {ThemeProvider} from "styled-components";

function App() {
  return (
          <div className="App">
                <Router>
                    <ThemeProvider theme={lightTheme}>
                    <div>
                        <MenuComponent/>
                    </div>
                    <Switch>
                        <Route path="/amiibos/:tail">
                            <AmiiboDetail/>
                        </Route>
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
                    </ThemeProvider>
                </Router>
          </div>
  );
}
export default App;
