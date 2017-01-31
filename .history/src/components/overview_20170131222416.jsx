import { Component } from 'react';
import { Link } from 'react-router';
export class OverView extends Component {
	static styles = {
		container: {
			width: '100%',
			height: '100%',
			backgroundColor: '#FCFCFC'
		}
	}
	render() {
		return (
			<div style={this.styles.container}>
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
