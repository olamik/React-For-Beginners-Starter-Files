import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import sampleFishes from '../sample-fishes';

import base from '../base';


class App extends React.Component {
	state = {
		fishes: {},
		order: {},
	};

	componentDidMount() {
		const { params } = this.props.match;
		const localStorageRef = localStorage.getItem(params.storeId);

		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) })
		}

		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	componentDidUpdate() {
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
	}

	addFish = fish => {
		// take a copy of the existing state
		// don't mutate state directly
		const fishes = {...this.state.fishes};

		// add new fish to fishes
		fishes[`fish${Date.now()}`] = fish;

		// set the new fishes object to state
		this.setState({
			fishes
		});
	};

	loadSampleFishes = () => {
		this.setState({
			fishes: sampleFishes
		});
	};

	addToOrder = key => {
		// take a copy of state
		const order = {...this.state.order};

		// add to the order or update number in existing order
		order[key] = order[key] + 1 || 1;

		// update the state
		this.setState({ order });
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{ Object.keys(this.state.fishes).map(key => <Fish key={key} details={ this.state.fishes[key] } addToOrder={this.addToOrder} index={key} />) }
					</ul>
				</div>
				<Order {...this.state} />
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
			</div>
		);
	}
}

export default App;