import "../style/style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import witcher3choose1 from "../assets/ui/witcher3choose1.png";
import witcher1choose1 from "../assets/ui/witcher1choose1.png";

function Menu() {
	const navigate = useNavigate();

	return (
		<>
			<Header />
			<main className='menu'>
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
			</main>
			<Footer />
		</>
	);
}

export default Menu;
