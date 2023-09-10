import React from 'react';
import witcherlogo from '../assets/ui/witcherlogo.png';
import witcherlogo2 from '../assets/ui/witcher1logo.png';
import witcherlogo3 from '../assets/ui/witcher2logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import '../style/style.scss';

const Header = ({
	counter,
	onButtonClick,
}: {
	counter: number;
	onButtonClick: any;
}) => {
	const navigate = useNavigate();
	const location = useLocation();
	const logos = [witcherlogo, witcherlogo3, witcherlogo2];
	const [spin, setSpin] = React.useState(0);

	return (
		<>
			<header
				className={
					counter === 0
						? 'witcher3_header'
						: counter === 1
						? 'witcher2_header'
						: 'witcher1_header'
				}
			>
				<div className='headerContainer'>
					<button
						onClick={() => {
							if (location.pathname === '/') {
								setSpin(1);
								onButtonClick();
							} else {
								navigate('/');
							}
						}}
						onAnimationEnd={() => setSpin(0)}
						data-spin={spin}
					>
						<img src={logos[counter]} alt='logo'></img>
					</button>
					<h1>The Witcher {counter === 0 ? '3' : counter === 1 ? '2' : '1'}</h1>
					<h3>Tracker</h3>
				</div>
			</header>
		</>
	);
};

export default Header;
