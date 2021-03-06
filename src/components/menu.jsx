import React from 'react';
import { Link } from 'react-router';
export class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const items = this.props.items.map((item)=>{
			if(item.link){
				return <li key={item.title}><Link to={item.link} activeClassName={item.activeClassName}>{item.title}</Link></li>;
			}else{
				return <li key={item.title}><a>{item.title}</a></li>;
			}
		});
		return (
			<ul role="nav">
				{items}
			</ul>
		);
	}
}
