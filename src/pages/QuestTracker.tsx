import React, { useEffect, useState } from "react";
import "../style/style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import questsWitcher3 from "../data/witcher3";
import questsWitcher1 from "../data/witcher1";

interface Quest {
	id: number;
	name: string;
	location: string;
	type: string;
	level: string;
}

function QuestTracker(props: any) {
	const witcherVersions: { [key: string]: any } = {
		witcher3: [3, 0],
		witcher1: [1, 1]
	};

	const witcherVersion = props.game;
	const webId = witcherVersions[witcherVersion][0];

	const [mapImg, changeMap] = useState<number>(0);
	const locationGroup: { [location: string]: { [type: string]: Quest[] } } = {};

	const [completedQuests, setCompletedQuests] = useState<number[]>([]);
	const questsData = [questsWitcher3, questsWitcher1];
	const quests = questsData[witcherVersions[witcherVersion][1]];

	useEffect(() => {
		const CompletedQuestsTemp = localStorage.getItem(`${witcherVersion}Quests`);
		if (CompletedQuestsTemp) {
			setCompletedQuests(JSON.parse(CompletedQuestsTemp));
		}
	}, [witcherVersion]);

	quests.forEach((quest: any) => {
		if (!locationGroup[quest.location]) {
			locationGroup[quest.location] = {};
		}
		if (!locationGroup[quest.location][quest.type]) {
			locationGroup[quest.location][quest.type] = [];
		}
		locationGroup[quest.location][quest.type].push(quest);
	});

	const completeQuest = (id: number) => {
		setCompletedQuests((prevCompletedQuests) => {
			const updatedQuests = prevCompletedQuests.includes(id) ? prevCompletedQuests.filter((previd) => previd !== id) : [...prevCompletedQuests, id];

			localStorage.setItem(`${witcherVersion}Quests`, JSON.stringify(updatedQuests));
			return updatedQuests;
		});
	};

	const changeCompletion = (type: Quest[]) => {
		const totalQuests = type.length;
		const completedQuestsCount = type.filter((quest) => completedQuests.includes(quest.id)).length;

		return `${completedQuestsCount + "/" + totalQuests}`;
	};

	const showMap = () => {
		if (mapImg !== 0) {
			const i = mapImg - 1;
			let img;
			try {
				witcherVersion.length > 8 ? (img = require(`../assets/${witcherVersion}/${i}.webp`)) : (img = require(`../assets/${witcherVersion}/map/${i}.png`));
				return (
					<div className='map' onClick={() => changeMap(0)}>
						<div className='mapcontainer'>
							<img src={img} alt='map' className='mapOn'></img>
							<button onClick={() => changeMap(0)}>X</button>
						</div>
					</div>
				);
			} catch (error) {
				return (
					<div className='mapText' onClick={() => changeMap(0)}>
						<div>
							<button onClick={() => changeMap(0)}>X</button>
							<p>
								{
									quests.filter((obj: any) => {
										return obj.id === i;
									})[0].desc
								}
							</p>
						</div>
					</div>
				);
			}
		} else return <></>;
	};

	const sortType = (location: { [type: string]: Quest[] }) => {
		return Object.entries(location).map(([type, typeQuest]) => {
			const completed = typeQuest.filter((quest) => completedQuests.includes(quest.id));
			const incompleted = typeQuest.filter((quest) => !completedQuests.includes(quest.id));

			const isMainQuest = type === "Main Quest";

			if (witcherVersion.length > 8) {
				return (
					<div key={type}>
						{incompleted
							.sort((a, b) => (isMainQuest ? 0 : Number(a.level) - Number(b.level)))
							.map((item) => (
								<div className={`quest ${completedQuests.includes(item.id) ? "completed" : ""}`} key={item.id} onClick={() => changeMap(item.id + 1)}>
									<div className='questinfo'>
										<span>{item.name}</span>
										<span>{item.type}</span>
									</div>
									<div className='questEvent'>
										<span>{item.level !== "0" ? item.level + " lvl" : "-"}</span>
										<button
											onClick={(e) => {
												e.stopPropagation();
												completeQuest(item.id);
											}}
										>
											{completedQuests.includes(item.id) ? "X" : ""}
										</button>
									</div>
								</div>
							))}
						{incompleted.length > 0 && completed.length > 0 ? <hr></hr> : ""}
						{completed
							.sort((a, b) => (isMainQuest ? 0 : Number(a.level) - Number(b.level)))
							.map((item) => (
								<div className={`quest ${completedQuests.includes(item.id) ? "completed" : ""}`} key={item.id} onClick={() => changeMap(item.id + 1)}>
									<div className='questinfo'>
										<span>{item.name}</span>
										<span>{item.type}</span>
									</div>
									<div className='questEvent'>
										<span>{item.level !== "0" ? item.level + " lvl" : "-"}</span>
										<button
											onClick={(e) => {
												e.stopPropagation();
												completeQuest(item.id);
											}}
										>
											{completedQuests.includes(item.id) ? "X" : ""}
										</button>
									</div>
								</div>
							))}
					</div>
				);
			} else {
				return (
					<details key={type}>
						<summary>
							{type} - {changeCompletion(typeQuest)}
						</summary>
						{incompleted
							.sort((a, b) => (isMainQuest ? 0 : Number(a.level) - Number(b.level)))
							.map((item) => (
								<div className={`quest ${completedQuests.includes(item.id) ? "completed" : ""}`} key={item.id} onClick={() => changeMap(item.id + 1)}>
									<div className='questinfo'>
										<span>{item.name}</span>
										<span>{item.type}</span>
									</div>
									<div className='questEvent'>
										<span>{item.level !== "0" ? item.level + " lvl" : "-"}</span>
										<button
											onClick={(e) => {
												e.stopPropagation();
												completeQuest(item.id);
											}}
										>
											{completedQuests.includes(item.id) ? "X" : ""}
										</button>
									</div>
								</div>
							))}
						{incompleted.length > 0 && completed.length > 0 ? <hr></hr> : ""}
						{completed
							.sort((a, b) => (isMainQuest ? 0 : Number(a.level) - Number(b.level)))
							.map((item) => (
								<div className={`quest ${completedQuests.includes(item.id) ? "completed" : ""}`} key={item.id} onClick={() => changeMap(item.id + 1)}>
									<div className='questinfo'>
										<span>{item.name}</span>
										<span>{item.type}</span>
									</div>
									<div className='questEvent'>
										<span>{item.level !== "0" ? item.level + " lvl" : "-"}</span>
										<button
											onClick={(e) => {
												e.stopPropagation();
												completeQuest(item.id);
											}}
										>
											{completedQuests.includes(item.id) ? "X" : ""}
										</button>
									</div>
								</div>
							))}
					</details>
				);
			}
		});
	};

	const sortLocation = () => {
		return Object.entries(locationGroup).map(([location, questLocation]) => (
			<details className='locationwitcher' key={location}>
				<summary>{location}</summary>
				{sortType(questLocation)}
			</details>
		));
	};

	return (
		<>
			<Header counter={webId} onButtonClick={""} />
			<main className={`${witcherVersion}quest quests`}>
				{showMap()}
				{sortLocation()}
			</main>
			<Footer counter={webId} />
		</>
	);
}

export default QuestTracker;
