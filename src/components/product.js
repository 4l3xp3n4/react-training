import React from 'react';

class Product extends React.Component {

	constructor(props) {
	  super(props);
	  this.handleUpVote = this.handleUpVote.bind(this);
	}

handleUpVote(){
	this.props.onVote(this.props.id);
}

	render() {
		return (
				<div className='item'>
					<div className='image'>
						<img src={this.props.productImageUrl} height="42" width="42" />
						<div className='middle aligned content'>
							<div className='header'>
								<a onClick={this.handleUpVote}>
									votar
									<i className='large caret up icon' />
								</a>
							</div>
							<div className='description'>
								<a href={this.props.url}>
									{this.props.title}
								</a>
								<p>
									{this.props.description}
								</p>
							</div>
							<div className='description'>
								<p>
									votes:{this.props.votes}
								</p>
							</div>
							<div className='extra'>
							<span>Submitted by:</span>
							<img className='ui avatar image'src={this.props.submitterAvatarUrl} height="42" width="42"/>
								</div>
						</div>
					</div>
				</div>
			);
		}
	}

export default Product;
