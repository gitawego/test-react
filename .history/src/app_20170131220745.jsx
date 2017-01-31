import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
// components
import { OverView } from './components/overview';
import { Transactions } from './components/transactions';

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={OverView}>
					<Route path="/transactions" component={Transactions} />
				</Route>
			</Router>
		);
	}
}

export default App;
