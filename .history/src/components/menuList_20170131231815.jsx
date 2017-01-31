import React from 'react';
import { Link } from 'react-router';
export class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const items = this.props.items.map((item)=>(
			<li>{item.name}</li>
		));
		return (
			<ul role="nav">
				{items}
			</ul>

		);
	}
}
