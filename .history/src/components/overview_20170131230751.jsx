import React from 'react';
import { Link } from 'react-router';
import './overview.less';
export class OverView extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div className="overview">
				<aside className="cell leftmenu">
					<div className="header title">FINPAL</div>
					<ul role="nav">
						<li><Link to="/">Overview</Link></li>
						<li><Link to="/transactions" activeClassName="active">Transactions</Link></li>
					</ul>
					<ul role="nav">
						<li>Transfer</li>
					</ul>
				</aside>
				<div className="page main cell">
					{this.props.children}
				</div>
			</div>
		);
	}
}
