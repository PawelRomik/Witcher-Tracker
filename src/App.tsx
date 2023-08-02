import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Wildhunt from './pages/Wildhunt';
import Armor from './pages/Armor';
import './style/style.scss';
import Kingslayer from './pages/Kingslayer';
import Gwent from './pages/Gwent';
import Drink from './pages/Drink';
import Dice from './pages/Dice';
import Passives from './pages/Passives';
import Romance from './pages/Romance';
import Salamander from './pages/Salamander';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Menu />} />
				<Route path='wildhunt' element={<Wildhunt />} />
				<Route path='armor' element={<Armor />} />
				<Route path='dice' element={<Dice />} />
				<Route path='drink' element={<Drink />} />
				<Route path='gwent' element={<Gwent />} />
				<Route path='kingslayer' element={<Kingslayer />} />
				<Route path='passives' element={<Passives />} />
				<Route path='romance' element={<Romance />} />
				<Route path='salamander' element={<Salamander />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
