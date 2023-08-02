import React from 'react';
import '../style/style.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Armor() {
	return (
		<>
			<Header counter={0} onButtonClick={''} />
			<main className='armor'></main>
			<Footer counter={0} />
		</>
	);
}

export default Armor;
