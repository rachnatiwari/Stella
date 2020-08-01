import React from 'react';
import data from './data';
import './App.css';

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
                        <button onClick={openMenu}>&#9776</button>
                        <a href="index.html">Stella</a>
                    </div>
                    <div className="header-links">
                        <a href="cart.html">Cart </a>
                        <a href="signin.html"> Sign In</a>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Flowers Category</h3>
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                    <Route path="/products/:id" component={ProductScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />
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
                        <ul className="products">
                            {
                            data.products.map(product =>
                                <li>
                                <div className="product">
                                    <img className="product-image" src={product.image} alt={product.name}  />
                                    <div className="product-name">
                                        <a href="product.html">{product.name}</a>
                                    </div>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-price">${product.price}</div>
                                    <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                                </div>
                                </li> )
                            }
                        </ul>
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
