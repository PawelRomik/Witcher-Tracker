import React, { useEffect, useState } from 'react';
import '../style/style.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import witcher3choose1 from '../assets/witcher3/witcher3choose1.png';
import witcher3choose2 from '../assets/witcher3/witcher3choose2.png';
import witcher3choose3 from '../assets/witcher3/witcher3choose3.png';
import witcher1choose1 from '../assets/witcher1/witcher1choose1.png';
import witcher1choose2 from '../assets/witcher1/witcher1choose2.png';
import witcher1choose3 from '../assets/witcher1/witcher1choose3.png';
import witcher1choose4 from '../assets/witcher1/witcher1choose4.png';
import witcher2choose1 from '../assets/witcher2/witcher2choose1.png';
import witcher2choose2 from '../assets/witcher2/witcher2choose2.png';

function Menu() {
	const navigate = useNavigate();
	const [counter, setCounter] = useState(
		localStorage.getItem('index') ? Number(localStorage.getItem('index')) : 0
	);
	const [content, changeContent] = useState(<></>);
	const [opacity, changeOpacity] = useState(counter);

	const handleButtonClick = () => {
		if (counter === 2) {
			setCounter(0);
		} else {
			setCounter((prevCounter) => prevCounter + 1);
		}
	};

	useEffect(() => {
		switch (counter) {
			case 0:
				changeContent(<></>);
				changeOpacity(0);
				break;
			case 1:
				changeContent(<></>);
				changeOpacity(1);
				break;

			case 2:
				changeContent(<></>);
				changeOpacity(2);
				break;
			default:
				changeContent(<></>);
		}
		localStorage.setItem('index', counter.toString());
	}, [counter, navigate]);

	useEffect(() => {
		switch (opacity) {
			case 0:
				changeContent(
					<>
						<div className='witcher3_choose'>
							<p>
								Quests <i className='fa-solid fa-crown'></i>
							</p>
							<button
								onClick={() => {
									navigate('/wildhunt');
								}}
							>
								<img src={witcher3choose1} alt='quests'></img>
							</button>
						</div>

						<div className='witcher3_choose'>
							<p>
								Gwent Cards <i className='fa-solid fa-rug'></i>
							</p>
							<button
								onClick={() => {
									navigate('/gwent');
								}}
							>
								<img src={witcher3choose2} alt='gwent'></img>
							</button>
						</div>
						<div className='witcher3_choose'>
							<p>
								Witcher Armor <i className='fa-solid fa-shield-halved'></i>
							</p>
							<button
								onClick={() => {
									navigate('/armor');
								}}
							>
								<img src={witcher3choose3} alt='armor'></img>
							</button>
						</div>
					</>
				);
				break;
			case 1:
				changeContent(
					<>
						<div className='witcher2_choose'>
							<p>
								Quests <i className='fa-solid fa-crown'></i>
							</p>
							<button
								onClick={() => {
									navigate('/kingslayer');
								}}
							>
								<img src={witcher2choose1} alt='quests'></img>
							</button>
						</div>

						<div className='witcher2_choose'>
							<p>
								Passives <i className='fa-solid fa-eye'></i>
							</p>
							<button
								onClick={() => {
									navigate('/passives');
								}}
							>
								<img src={witcher2choose2} alt='passives'></img>
							</button>
						</div>
					</>
				);
				break;

			case 2:
				changeContent(
					<>
						<div className='witcher_choose'>
							<p>
								Quests <i className='fa-solid fa-crown'></i>
							</p>
							<button
								onClick={() => {
									navigate('/salamander');
								}}
							>
								<img src={witcher1choose1} alt='quests'></img>
							</button>
						</div>

						<div className='witcher_choose'>
							<p>
								Romance Cards <i className='fa-solid fa-heart'></i>
							</p>
							<button
								onClick={() => {
									navigate('/romance');
								}}
							>
								<img src={witcher1choose2} alt='romances'></img>
							</button>
						</div>

						<div className='witcher_choose'>
							<p>
								Dice <i className='fa-solid fa-dice'></i>
							</p>
							<button
								onClick={() => {
									navigate('/dice');
								}}
							>
								<img src={witcher1choose3} alt='dice poker'></img>
							</button>
						</div>

						<div className='witcher_choose'>
							<p>
								Drink Competition <i className='fa-solid fa-wine-bottle'></i>
							</p>
							<button
								onClick={() => {
									navigate('/drink');
								}}
							>
								<img src={witcher1choose4} alt='drink competition'></img>
							</button>
						</div>
					</>
				);
				break;
			default:
				changeContent(<></>);
		}
	}, [opacity, navigate]);

	return (
		<>
			<Header counter={counter} onButtonClick={handleButtonClick} />
			<main className='menu'>{content}</main>
			<Footer counter={counter} />
		</>
	);
}

export default Menu;
