import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './css/normalize.css';
import './css/font-awesome.min.css';
import './css/style.css';
import './css/style-catalogue.css';

class Pagination extends Component {
	render() {
		return(
			<div className="product-catalogue__pagination">
      	<div className="page-nav-wrapper">
        	<div className="angle-back"><a href="#"></a></div>
          <ul>
          	<li className="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="">...</a></li>
            <li><a href="#">99</a></li>
          </ul>
          <div className="angle-forward"><a href="#"></a></div>
        </div>
    	</div>
		) 
	}
};

export default Pagination;