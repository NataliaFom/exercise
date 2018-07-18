import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './css/normalize.css';
import './css/font-awesome.min.css';
import './css/style.css';
import './css/style-catalogue.css';

class SliderViewed extends Component {
	render() {
		return (
			<section className="product-catalogue__overlooked-slider">
			
      	<h3>Вы смотрели:</h3>
			
      	<div className="overlooked-slider">
        	<div className="overlooked-slider__arrow overlooked-slider__arrow_left arrow"></div>
        	<div className="overlooked-slider__item overlooked-slider__item-1">
          	<a href="product-card-desktop.html"></a>
        	</div>
        	<div className="overlooked-slider__item overlooked-slider__item-2">
          	<a href="product-card-desktop.html"></a>
        	</div>
        	<div className="overlooked-slider__item overlooked-slider__item-3">
          	<a href="product-card-desktop.html"></a>
        	</div>
        	<div className="overlooked-slider__item overlooked-slider__item-4">
          	<a href="product-card-desktop.html"></a>
        	</div>
        	<div className="overlooked-slider__item overlooked-slider__item-5">
          	<a href="product-card-desktop.html"></a>
        	</div>
        	<div className="overlooked-slider__arrow overlooked-slider__arrow_right arrow"></div>
      	</div>
			
    	</section>
		)
	}
};

export default SliderViewed;