import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

//Komponent - Home
const Home = () => <h1>Strona startowa</h1>;
//Komponent - News
const News = () => <h1>Strona news</h1>;
//Komponent - Contact
const Contact = () => <h1>Strona contact</h1>;
//Komponent - Error
const Error = () => <h1>Błąd zły adress</h1>;


function App() {
  return (
    <Router>
    <div>
      <header>
        <nav>
          <ul>
            {/*
            <li><a href="/">start</a></li>
            <li><a href="/news">news</a></li>
            <li><a href="/contact">contact</a></li>
            */}
            <li>
              <NavLink activeStyle={{color: '#ffa'}} activeClassName="selected_home" exact to="/">start</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected_news" to="/news">news</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected_contact" to="/contact">contact</NavLink>
            </li>
            

          </ul>
        </nav>
      </header>
      <section>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Error}/>
        </Switch>
      </section>
    </div>
    </Router>
  );
}

export default App;
