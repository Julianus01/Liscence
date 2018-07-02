import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './db_config/db_config'; // DB_CONFIG
import Home from './components/home/home.jsx';
import Blog from './components/blog/blog.jsx';
import Cats from './pages/cats.jsx';
import Gallery from './pages/gallery';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* <Route exact path='/' component={Index} />
            <Route exact strict path='/home' component={Home} />
            <Route exact strict path='/blog' component={Blog} />
            <Route exact strict path='/cats' component={Cats} /> */}
            <Route exact strict path='/' component={Cats} />
            <Route exact strict path='/gallery' component={Gallery} />
            <Route exact strict path='/blog' component={Blog} />
            <Route exact strict path='/home' component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
