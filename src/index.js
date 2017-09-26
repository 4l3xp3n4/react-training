import React , {Component} from 'react';
import ReactDOM from 'react-dom';

import ProductList from './components/product_list';


const API_KEY = 'AIzaSyCBIEq-dEdsbgxzRO8uxyXSVfua2DpBMrQ';



class App extends Component {
	constructor(props){
		super(props);
			this.state = {videos : []};
		}

	render(){
		return(
			<div>
				<ProductList/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
