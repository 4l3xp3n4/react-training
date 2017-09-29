import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import Product from './components/product'
import products from './components/seed';
import ProductList from './components/product_list';


class App extends Component {
	constructor(props){
		super(props);

		}

	render(){
		const product = products[0];
		return(
			<div>
				<ProductList id={product.id}
					title={product.title}
					description={product.description}
					url={product.url}
					votes={product.votes}
					submitterAvatarUrl={product.submitterAvatarUrl}
					productImageUrl={product.productImageUrl}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
