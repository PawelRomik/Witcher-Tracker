import React, { useEffect, useState } from "react";
import "../style/style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import witcher3choose1 from "../assets/ui/witcher3choose1.png";
import witcher1choose1 from "../assets/ui/witcher1choose1.png";
import witcher2choose1 from "../assets/ui/witcher2choose1.png";

function Menu() {
	const navigate = useNavigate();
	const [counter, setCounter] = useState(localStorage.getItem("index") ? Number(localStorage.getItem("index")) : 3);
	const [content, changeContent] = useState(<></>);
	const [opacity, changeOpacity] = useState(counter);

	const handleButtonClick = () => {
		if (counter === 3) {
			setCounter(1);
		} else {
			setCounter(3);
		}
	};

	useEffect(() => {
		switch (counter) {
			case 1:
				changeContent(<></>);
				changeOpacity(1);
				break;
			case 2:
				changeContent(<></>);
				changeOpacity(2);
				break;

			case 3:
				changeContent(<></>);
				changeOpacity(3);
				break;
			default:
				changeContent(<></>);
		}
		localStorage.setItem("index", counter.toString());
	}, [counter, navigate]);

	useEffect(() => {
		switch (opacity) {
			case 3:
				changeContent(
					<>
						<div className='witcher_choose'>
							<button
								onClick={() => {
									navigate("/salamander");
								}}
							>
								<img src={witcher1choose1} alt='quests'></img>
							</button>
						</div>
						<div className='witcher3_choose'>
							<button
								onClick={() => {
									navigate("/wildhunt");
								}}
							>
								<img src={witcher3choose1} alt='quests'></img>
							</button>
						</div>
					</>
				);
				break;
			case 2:
				changeContent(
					<>
						<div className='witcher2_choose'>
							<button
								onClick={() => {
									navigate("/kingslayer");
								}}
							>
								<img src={witcher2choose1} alt='quests'></img>
							</button>
						</div>
					</>
				);
				break;

			case 1:
				changeContent(
					<>
						<div className='witcher_choose'>
							<button
								onClick={() => {
									navigate("/salamander");
								}}
							>
								<img src={witcher1choose1} alt='quests'></img>
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
