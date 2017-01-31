import React from 'react';
import { Link } from 'react-router';
export class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const items = this.props.items.map((item)=>(
			<li>{item.name}</li>
		));
		return (
			<ul role="nav">
				<li><Link to="/">Overview</Link></li>
				<li><Link to="/transactions" activeClassName="active">Transactions</Link></li>
			</ul>

		);
	}
}
