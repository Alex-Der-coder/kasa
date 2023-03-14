// Import the necessary libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './components/header';
import Body from './components/body';
import About from './components/page_about';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import LogementDetails from './components/LogementDetails';

// Define the App component
const App = () => {
  return (
    <div className="App">
      <Router> {/* Define a router component */}
        <Header /> {/* Render the header component */}
        <Switch> {/* Define a switch component to handle routing */}
          <Route exact path="/"> {/* Define a route for the home page */}
            <Body showGallery isAboutPage={false} /> {/* Render the body component with props */}
          </Route>
          <Route exact path="/about"> {/* Define a route for the about page */}
            <About /> {/* Render the about component */}
          </Route>
          <Route path="/:id" component={LogementDetails} /> {/* Define a route with a dynamic URL parameter */}
          <Route path="/404" component={PageNotFound} /> {/* Define a route for the 404 page */}
          <Route path="*"> {/* Define a catch-all route */}
            <Redirect to="/404" /> {/* Redirect to the 404 page */}
          </Route>
        </Switch>
        <Footer /> {/* Render the footer component */}
      </Router>
    </div>
  );
};

export default App; 
