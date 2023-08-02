import React from 'react';
import '../style/style.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Wildhunt() {
	return (
		<>
			<Header counter={0} onButtonClick={''} />
			<main className='quests'></main>
			<Footer counter={0} />
		</>
	);
}

export default Wildhunt;
