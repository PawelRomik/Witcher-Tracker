import React from 'react';
import '../style/style.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Passives() {
	return (
		<>
			<Header counter={1} onButtonClick={''} />
			<main className='quests'></main>
			<Footer counter={1} />
		</>
	);
}

export default Passives;
