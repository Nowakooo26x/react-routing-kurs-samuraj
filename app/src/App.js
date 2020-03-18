import React from 'react';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom';

//Komponent - Home
const Home = () => <h1>Strona startowa</h1>;
//Komponent - News
const News = () => <h1>Strona news</h1>;
//Komponent - Contact
const Contact = () => <h1>Strona contact</h1>;



function App() {
  return (
    <BrowserRouter>
    <div>
      <heder>
        <nav>
          <ul>
            {/*
            <li><a href="/">start</a></li>
            <li><a href="/news">news</a></li>
            <li><a href="/contact">contact</a></li>
            */}
            <li><Link to="/">start</Link></li>
            <li><Link to="/news">news</Link></li>
            <li><Link to="/contact">contact</Link></li>
            

          </ul>
        </nav>
      </heder>
      <section>
        <Home/>
        <News/>
        <Contact/>
      </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
