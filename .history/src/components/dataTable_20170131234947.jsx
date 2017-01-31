import React from 'react';
import { Store } from '../services/store';
export class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.header = {
			created_at: 'Created At',
			counterparty_name: 'Counterparty Name',
			operation_type: 'Payment Type',
			amount: 'Amount'
		};
		this.headerOrder = ['created_at', 'counterparty_name', 'operation_type', 'amount'];
	}
	getInitialState() {
		return {
			transactions: []
		};
	}
	render() {
		const header = this.headerOrder.map((item)=>(
			<div className="header-item">{this.header[item]}</div>
		));
		return (
			<div className="header">{header}</div>
		);
	}
}
