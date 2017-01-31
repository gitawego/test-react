import React from 'react';
import { Link } from 'react-router';
import {Menu} from './menu';
import './overview.less';
export class OverView extends React.Component {
	constructor(props) {
		super(props);
		this.menuItems = [
			[{
				title:'Overview',
				link:'/'
			},{
				title:'Transactions (3)',
				link:'/transactions',
				activeClassName:'active'
			}],
			[{
				title:'Transfer(2)'
			},{
				title:'Invoices (1)'
			}],
			[{
				title:'Manage Cards'
			},{
				title:'Manage Accounts'
			}]
		]
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
						<li><a >Transfer</a></li>
					</ul>
				</aside>
				<div className="page main cell">
					{this.props.children}
				</div>
			</div>
		);
	}
}
