import React, { Component } from 'react';
import Profile from '../components/profile';
import Summary from '../components/summary';
import Experiences from '../components/experiences';
import Educations from '../components/educations';

class ReactResume extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				{/* <NavBar /> */}
				<div className='container'>
					<Profile />
					<Summary />
					<Experiences />
					<Educations />
				</div>
			</React.Fragment>
		);
	}
}

export default ReactResume;