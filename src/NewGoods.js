import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { sliderNewGoods } from './slider';

const Toolbar = (props) => {
	const { categories, selected, onSelectCategory} = props;
	
	const renderCategories = (categories) => {
		return categories.map((category) => {
			const className = category.id === selected ? 
			"new-deals__menu-item new-deals__menu-item_active" : "new-deals__menu-item";
			return (
				<li 
					className={className}
					onClick={() => onSelectCategory(category)}
					key={category.id} id={category.id}>
         		<a>{category.title}</a>
      	</li>
			)
		});	
	}
	return(
		<div className="new-deals__menu">
			<ul className="new-deals__menu-items">{renderCategories(categories)}</ul>
		</div>
	) 
};

class NewDealsSlider extends Component {
	constructor(props) {
    super(props);
    this.state = {
    };
  }
	
	componentDidMount() {
		let slider = document.querySelector('.new-deals__slider');
		let images = slider.querySelectorAll('.new-deals__product_image');
		let nextButton = slider.querySelector('.new-deals__arrow_right');
		let prevButton = slider.querySelector('.new-deals__arrow_left');
		sliderNewGoods(slider, images, nextButton, prevButton);
	}
	
	renderFeatured(featured) {
		return featured.map((product)=> {
			
			const config = {
				backgroundImage: `url(${product.images[0]})`,
				backgroundSize: 'contain'
		 	};
		 
		 let className;
		 let favorite;
	
		 if (featured.indexOf(product) === 0) {
					className = "new-deals__product_image new-deals__product new-deals__product_first";
					favorite = null;
		 } else if (featured.indexOf(product) === 1) {
					className = "new-deals__product_image new-deals__product new-deals__product_active";
					favorite = <div className="new-deals__product_favorite"></div>; 	
		 } else if (featured.indexOf(product) === 2) {
					className = "new-deals__product_image new-deals__product new-deals__product_last";
					favorite = null;
		 } else {
			 		className = "new-deals__product_image";
					favorite = null;
		 }
			
		 return (
				<div className={className} style={config} key={product.id} id={product.id}>
        	<NavLink to="/ProductCard"></NavLink>
						{favorite}
        </div>
			)
		})
	}
	
	render() {
		return (
			<div className="new-deals__slider">
       	<div className="new-deals__arrow new-deals__arrow_left arrow"></div>
			 	{this.renderFeatured(this.props.featured)}
       	<div className="new-deals__arrow new-deals__arrow_right arrow"></div>
    	</div>
		)	
	}	
}


class NewGoods extends Component {
	constructor(props) {
    super(props);
    this.state = {
			categories: [],
      featured: [],
      selected: 'All',
    };
  }
	
	componentDidMount() {
    this.loadСategories();
		this.loadFeatured();	
  }
		
	loadСategories() {
		fetch('https://neto-api.herokuapp.com/bosa-noga/categories')
			.then(response => response.json())
			.then(categories => {
				this.setState({categories: categories.data});
				//console.log(this.state.categories);
			});
	}
	
	loadFeatured() {
		fetch('https://neto-api.herokuapp.com/bosa-noga/featured')
			.then(response => response.json())
			.then(featured => {
				this.setState({featured: featured.data});
				//console.log(this.state.featured);
			});
	}
	
	changeCategory(category) {
    //console.log(category);
    this.setState({ selected: category.id });
  }
	
	getProducts(featured) {
    if (this.state.selected === 'All') {return featured};
    // возвращаем массив с объектами у которых product.categoryId === this.state.selected
    return featured.filter(product => product.categoryId === this.state.selected);
  };
	
	render() {
		return(
			<section className="new-deals wave-bottom">
			
				<h2 className="h2">Новинки</h2>
			
				<Toolbar 
					categories={this.state.categories}
					selected={this.state.selected}
					onSelectCategory={(category) => this.changeCategory(category)}/>
				
				<NewDealsSlider featured={this.getProducts(this.state.featured)}/>

      	<div className="new-deals__product-info" >
        	<NavLink to="/ProductCard" className="h3">Название</NavLink>
        	<p>Производитель:
          	<span>бренд</span>
        	</p>
        	<h3 className="h3">цена ₽</h3>
      	</div>
			
    	</section>
		)
	}
};

export default NewGoods;



