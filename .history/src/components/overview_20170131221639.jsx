import { Component } from 'react';
import { Link } from 'react-router';
export class OverView extends Component {
	styles = {
		container:{
			width:"100%",
			height:"100%"
		}
	}
	render() {
		return (
			<div>
				<aside>
					<h4>Categories</h4>
					<ul role="nav">
						<li><Link to="/start" activeStyle={{ color: '#3498db' }}>Start</Link></li>
					</ul>
				</aside>

				<div className="page main">
					{this.props.children}
				</div>
			</div>
		);
	}
}
