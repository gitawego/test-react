import React from 'react';
import DataGrid from 'react-datagrid';
import { Store } from '../services/store';
import './dataTable.less';

const TextCell = ({rowIndex, data, col, ...props}) => (
	<Cell {...props}>
		{data.getObjectAt(rowIndex)[col]}
	</Cell>
);
export class DataTable extends React.Component {
	constructor(props) {
		super(props);
		this.header = {
			created_at: 'Created At',
			counterparty_name: 'Counterparty Name',
			operation_type: 'Payment Type',
			amount: 'Amount'
		};
		this.columns = [{
			name: 'created_at',
			title: 'Created At'
		}, {
			name: 'counterparty_name',
			title: 'Counterparty Name'
		}, {
			name: 'operation_type',
			title: 'Payment Type'
		}, {
			name: 'amount',
			title: 'Amount'
		}];
		this.state = {
			transactions: []
		}
		this.fetchData();
	}
	fetchData() {
		Store.getData()
			.then(resp => {
				this.setState({
					transactions: resp.transactions
				});
			});
	}
	render() {
		const {transactions} = this.state;
		console.log('transactions', transactions);
		return (
			<DataGrid idProperty="id" dataSource={transactions} columns={this.columns} />
		);
	}
}
