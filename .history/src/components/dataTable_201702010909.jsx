import React from 'react';
import { Table, Column, Cell,TextCell } from 'fixed-data-table';
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
		const {transactions} = this.state;
		return (
			<Table
				rowHeight={50}
				headerHeight={50}
				rowsCount={transactions.length}
				width={1000}
				height={500}
				{...this.props}>
				<Column
					header={<Cell>Created At</Cell>}
					cell={<TextCell data={transactions} col="created_at" />}
					fixed={true}
					width={100}
				/>
				<Column
					header={<Cell>Counterparty Name</Cell>}
					cell={<ColoredTextCell data={transactions} col="counterparty_name" />}
					flexGrow={2}
					width={200}
				/>
				<Column
					header={<Cell>Payment Type</Cell>}
					cell={<TextCell data={transactions} col="operation_type" />}
					flexGrow={1}
					width={200}
				/>
				<Column
					width={100}
					header={<Cell>Amount</Cell>}
					cell={<TextCell data={transactions} col="amount" />}
				/>
			</Table>
		);

	}
}
