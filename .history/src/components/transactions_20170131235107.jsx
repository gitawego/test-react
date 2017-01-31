import React from 'react';
import './transactions.less';
import {DataTable} from './dataTable';
export class Transactions extends React.Component {
	render() {
		return (
			<div className="transactions">
				<div className="datatable">
					<div className="header"></div>
					<DataTable />
				</div>
				<div className="desc">
					<div className="header"></div>
				</div>
			</div>
		);
	}
}
