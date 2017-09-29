import React from 'react';
import Product from './product';
import products from './seed';

class ProductList extends React.Component {
constructor(props){
  super(props);

  this.state={
    products,
  };

  this.handleUpVote = this.handleUpVote.bind(this);
}

componentDidMount() {
  this.setState({ products: products });
}


handleUpVote(productId) {
  const newProducts = this.state.products.map((product)=>{
    if(product.id === productId){
      return Object.assign({},product,{
        votes : product.votes+1,
      });
    }
    else{
      return product;
    }
  });

  this.setState({
    products: newProducts,
  });

}

render() {

    const products = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));

    const productComponents = products.map((product) => (
      <li>
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        votes ={product.votes}
        onVote = {this.handleUpVote}
      />
      </li>
    ));

    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
      );
  }
}

export default ProductList;
