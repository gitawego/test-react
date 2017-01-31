import React from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import { Store } from '../services/store';
import './dataTable.less';
export class DataTable extends React.Component {
	constructor(props) {
		super(props);
		this.header = {
			created_at: 'Created At',
			counterparty_name: 'Counterparty Name',
			operation_type: 'Payment Type',
			amount: 'Amount'
		};
		this.headerOrder = ['created_at', 'counterparty_name', 'operation_type', 'amount'];
		this.state = {
			transactions: []
		}
		this.fetchData();
	}
	fetchData() {
		Store.getData().then(data => {
			this.setState({
				transactions: data
			});
		});
	}
	render() {
		const header = this.headerOrder.map((item) => (
			<div className="header-item" key={item}>{this.header[item]}</div>
		));
		return (
			<div className="dataTable">
				<div className="dt-header">{header}</div>
			</div>
		);
	}
}
