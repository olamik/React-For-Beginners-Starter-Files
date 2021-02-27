import React from 'react';

class StorePicker extends React.Component {
	render() {
		return (
			<React.Fragment>
				<p>Fish!</p>
				{/*
					comment!
				*/}
				<form action="" className="store-selector">
					<h2>Please enter a store</h2>
					<input type="text" required placeholder="Store Name" />
					<button type="submit">Visit Store </button>
				</form>
			</React.Fragment>
		);
	}
}

export default StorePicker;