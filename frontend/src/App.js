import React from 'react';
// import data from './data';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  
  return (
      <BrowserRouter>
        <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={openMenu}> + </button>
                        <Link to="/"> Stella</Link>
                    </div>
                    <div className="header-links">
                        <a href="cart.html">Cart </a>
                        <a href="signin.html"> Sign In</a>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Flowers Category</h3>
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                    <ul>
                        <li>
                            <a href="pnats.html">Roses</a>
                        </li>
                        <li>
                            <a href="pnats.html">Hydrangea</a>
                        </li>
                        <li>
                            <a href="pnats.html">Orchids</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                    <Route path="/products/:id" component={ProductScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />
                    </div>
                </main>
                <footer className="footer">
                    By : Rachna Tiwari
                </footer>
            </div>
        </BrowserRouter>
  );
}

export default App;
