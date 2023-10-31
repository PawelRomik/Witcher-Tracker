import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import QuestTracker from "./pages/QuestTracker";
import Armor from "./pages/Armor";
import "./style/style.scss";
import Gwent from "./pages/Gwent";
import Dice from "./pages/Dice";
import Passives from "./pages/Passives";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Menu />} />
				<Route path='wildhunt' element={<QuestTracker game={"witcher3"} />} />
				<Route path='armor' element={<Armor />} />
				<Route path='dice' element={<Dice />} />
				<Route path='drink' element={<QuestTracker game={"witcher1Drinkgame"} />} />
				<Route path='gwent' element={<Gwent />} />
				<Route path='kingslayer' element={<QuestTracker game={"witcher2"} />} />
				<Route path='passives' element={<Passives />} />
				<Route path='romance' element={<QuestTracker game={"witcher1Romance"} />} />
				<Route path='salamander' element={<QuestTracker game={"witcher1"} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
