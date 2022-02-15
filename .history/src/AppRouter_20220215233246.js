import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Favorites } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          
          <Route path="/Favorites">
           <Favorites/>
          </Route>
          <Route exact path="/" >
            <Home/>
          </Route>
        </Switch>
      </Router>,node
    </ThemeProvider>
  );
};

export default AppRouter;
