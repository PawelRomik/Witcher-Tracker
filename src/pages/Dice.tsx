import React from 'react';
import '../style/style.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Dice() {
	return (
		<>
			<Header counter={2} onButtonClick={''} />
			<main className='quests'></main>
			<Footer counter={2} />
		</>
	);
}

export default Dice;
