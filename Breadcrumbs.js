import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './css/normalize.css';
import './css/font-awesome.min.css';
import './css/style.css';
import './css/style-order.css';
import './css/style-product-card.css';

class Breadcrumbs extends Component {
	render() {
		return(
			<div class="site-path">
      	<ul class="site-path__items">
        	<li class="site-path__item"><a href="index.html">Главная</a></li>
        	<li class="site-path__item"><a href="#">Женская обувь</a></li>
        	<li class="site-path__item"><a href="#">Ботинки</a></li>
        	<li class="site-path__item"><a href="#">Ботинки женские</a></li>
      	</ul>
    </div>
		) 
	}
};

export default Breadcrumbs;

