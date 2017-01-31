import React from 'react';
import { Link } from 'react-router';
import { Menu } from './menu';
import './overview.less';
export class OverView extends React.Component {
	constructor(props) {
		super(props);
		this.menuItems = [
			[{
				title: 'Overview',
				link: '/'
			}, {
				title: 'Transactions (3)',
				link: '/transactions',
				activeClassName: 'active'
			}],
			[{
				title: 'Transfer(2)'
			}, {
				title: 'Invoices (1)'
			}],
			[{
				title: 'Manage Cards'
			}, {
				title: 'Manage Accounts'
			}]
		]
	}
	render() {
		const uls = this.menuItems.map((menu) => (
			<Menu items={menu}></Menu>
		));
		return (
			<div className="overview">
				<aside className="cell leftmenu">
					<div className="header title">FINPAL</div>
					{uls}
				</aside>
				<div className="page main cell">
					{this.props.children}
				</div>
			</div>
		);
	}
}
