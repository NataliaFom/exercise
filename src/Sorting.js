import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './css/normalize.css';
import './css/font-awesome.min.css';
import './css/style.css';
import './css/style-catalogue.css';

class Sorting extends Component {
	render() {
		return(
			<div className="product-catalogue__sort-by">
      	<p className="sort-by">Сортировать</p>
        <select name="" id="sorting">
        	<option value="">по популярности</option>
          <option value="">по размеру</option>
          <option value="">по производителю</option>
       	</select>
     </div>
		)
	}
};

export default Sorting;
