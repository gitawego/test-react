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
		this.headerOrder = ['created_at', 'counterparty_name', 'operation_type', 'amount'];
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
			<DataGrid idProperty="id" dataSource={data} columns={columns} />
		);
	}
}
