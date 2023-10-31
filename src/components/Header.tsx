import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../style/style.scss";
import witcherlogo from "../assets/ui/witcherlogo.png";
import witcherlogo2 from "../assets/ui/witcher1logo.png";
import witcherlogo3 from "../assets/ui/witcher2logo.png";

const Header = ({ counter, onButtonClick }: { counter: number; onButtonClick: any }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const logos = [witcherlogo2, witcherlogo3, witcherlogo];

	const [spin, setSpin] = useState(0);

	const handleLogoClick = () => {
		if (location.pathname === "/") {
			setSpin(1);
			onButtonClick();
		} else {
			navigate("/");
		}
	};

	return (
		<header className={`witcher${counter}_header`}>
			<div className='headerContainer'>
				<button onClick={handleLogoClick} onAnimationEnd={() => setSpin(0)} data-spin={spin}>
					<img src={logos[counter - 1]} alt='logo' />
				</button>
				<h1>The Witcher {counter}</h1>
				<h3>Tracker</h3>
			</div>
		</header>
	);
};

export default Header;
