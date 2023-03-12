import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from './components/header';
import Body from './components/body';
import About from './components/page_about';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import LogementDetails from './components/LogementDetails';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Body showGallery isAboutPage={false} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/:id" component={LogementDetails} />
          <Route exact path="/404" component={PageNotFound} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
