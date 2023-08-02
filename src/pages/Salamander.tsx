import React from 'react';
import '../style/style.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Salamander() {
	return (
		<>
			<Header counter={2} onButtonClick={''} />
			<main className='quests'></main>
			<Footer counter={2} />
		</>
	);
}

export default Salamander;
