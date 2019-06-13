import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './modules/counter';

class App extends Component {
	render() {
		const { number, increment, decrement } = this.props;

		return (
			<div>
				<h1>{number}</h1>
				<button onClick={increment}>+1</button>
				<button onClick={decrement}>-1</button>
			</div>
		);
	}
}
export default connect(
	({ counter }) => ({
		number: counter.number
	}),
	{
		increment,
		decrement
	}
)(App);
