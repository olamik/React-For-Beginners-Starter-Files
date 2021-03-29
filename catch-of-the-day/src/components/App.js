import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

import sampleFishes from '../sample-fishes';


class App extends React.Component {
	state = {
		fishes: {},
		order: {},
	};

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
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
			</div>
		);
	}
}

export default App;