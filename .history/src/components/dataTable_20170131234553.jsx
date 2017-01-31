import React from 'react';
import { Store } from '../services/store';
export class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	getInitialState() {
		return {
			transactions: []
		};
	}
	render() {
		const header = Object.keys(this.state.transactions[0] || {});
		return (
			<div></div>
		);
	}
}
