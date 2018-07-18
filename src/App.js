import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './css/style.css';

import Header from './Header';
import HomePage from './HomePage';
import Catalog from './Catalog';
import Favorites from './Favorites';
import ProductCard from './ProductCard';
import Order from './Order';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
				<div>
					<Header />
					<div>
						<Route path="/" exact component={HomePage} />
						<Route path="/favorites" component={Favorites} />
						<Route path="/catalog" component={Catalog} />
						<Route path="/productCard" component={ProductCard} />
						<Route path="/order" component={Order} />
					</div>
					<Footer />
				</div>
    );
  }
}

export default App;
