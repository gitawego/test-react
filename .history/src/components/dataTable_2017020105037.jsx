import React from 'react';
import moment from 'moment';
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
		this.columns = [{
			name: 'created_at',
			title: 'Created At',
			render(v){
				return moment(v).format('DD-MM-YYYY');
			}
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
		return (
			<DataGrid idProperty="id" dataSource={transactions} columns={this.columns} />
		);
	}
}
