import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
// components
import { OverView } from './components/overview';
import Start from './components/start.js';
import Guide from './components/guide.js';
import How from './components/how.js';

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={OverView}>
					<Route path="/transactions" component={Start} />
				</Route>
			</Router>
		);
	}
}

export default App;
