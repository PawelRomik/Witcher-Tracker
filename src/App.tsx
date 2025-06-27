import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import QuestTracker from "./pages/QuestTracker";

import "./style/style.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Menu />} />
				<Route path='wildhunt' element={<QuestTracker game={"witcher3"} />} />
				<Route path='salamander' element={<QuestTracker game={"witcher1"} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
