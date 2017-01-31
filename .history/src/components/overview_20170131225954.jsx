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
				<aside className="cell aside">
					<div className="header title">FINPAL</div>
					<ul role="nav">
						<li><Link to="/transactions" activeStyle={{ color: '#3498db' }}>Start</Link></li>
					</ul>
				</aside>
				<div className="page main cell">
					{this.props.children}
				</div>
			</div>
		);
	}
}
