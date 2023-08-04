import React, { useEffect, useState } from 'react';
import '../style/style.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import quests from '../data/witcher3';

interface Quest {
	id: number;
	name: string;
	location: string;
	type: string;
	level: string;
}

function Wildhunt() {
	const [completedQuests, setCompletedQuests] = useState<number[]>([]);
	const [mapImg, changeMap] = useState<number>(0);
	const locationGroup: { [location: string]: { [type: string]: Quest[] } } = {};

	useEffect(() => {
		const CompletedQuestsTemp = localStorage.getItem('witcher3Quests');
		if (CompletedQuestsTemp) {
			setCompletedQuests(JSON.parse(CompletedQuestsTemp));
		}
	}, []);

	quests.forEach((quest) => {
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
			const updatedQuests = prevCompletedQuests.includes(id)
				? prevCompletedQuests.filter((previd) => previd !== id)
				: [...prevCompletedQuests, id];

			localStorage.setItem('witcher3Quests', JSON.stringify(updatedQuests));
			return updatedQuests;
		});
	};

	const changeCompletion = (type: Quest[]) => {
		const totalQuests = type.length;
		const completedQuestsCount = type.filter((quest) =>
			completedQuests.includes(quest.id)
		).length;

		return `${completedQuestsCount + '/' + totalQuests}`;
	};

	const showMap = () => {
		if (mapImg !== 0) {
			const i = mapImg - 1;
			let img;
			try {
				img = require('../assets/witcher3/map/' + i + '.png');
				return (
					<div className='map' onClick={() => changeMap(0)}>
						<div
							className='mapOn'
							style={{ backgroundImage: `url(` + img + `)` }}
						>
							<button onClick={() => changeMap(0)}>X</button>
						</div>
					</div>
				);
			} catch (error) {
				return (
					<div className='map' onClick={() => changeMap(0)}>
						<div>
							<button onClick={() => changeMap(0)}>X</button>
							<p>{quests[i].desc}</p>
						</div>
					</div>
				);
			}
		} else return <></>;
	};

	const sortType = (location: { [type: string]: Quest[] }) => {
		return Object.entries(location).map(([type, typeQuest]) => {
			const completed = typeQuest.filter((quest) =>
				completedQuests.includes(quest.id)
			);
			const incompleted = typeQuest.filter(
				(quest) => !completedQuests.includes(quest.id)
			);

			return (
				<details key={type}>
					<summary>
						{type} - {changeCompletion(typeQuest)}
					</summary>
					{incompleted
						.sort((a, b) => Number(a.level) - Number(b.level))
						.map((item) => (
							<div
								className={`quest ${
									completedQuests.includes(item.id) ? 'completed' : ''
								}`}
								key={item.id}
								onClick={() => changeMap(item.id + 1)}
							>
								<div className='questinfo'>
									<span>{item.name}</span>
									<span>{item.type}</span>
								</div>
								<div className='questEvent'>
									<span>{item.level !== '0' ? item.level + ' lvl' : '-'}</span>
									<button
										onClick={(e) => {
											e.stopPropagation();
											completeQuest(item.id);
										}}
									>
										{completedQuests.includes(item.id) ? 'X' : ''}
									</button>
								</div>
							</div>
						))}
					{completed
						.sort((a, b) => Number(a.level) - Number(b.level))
						.map((item) => (
							<div
								className={`quest ${
									completedQuests.includes(item.id) ? 'completed' : ''
								}`}
								key={item.id}
								onClick={() => changeMap(item.id + 1)}
							>
								<div className='questinfo'>
									<span>{item.name}</span>
									<span>{item.type}</span>
								</div>
								<div className='questEvent'>
									<span>{item.level !== '0' ? item.level + ' lvl' : '-'}</span>
									<button
										onClick={(e) => {
											e.stopPropagation();
											completeQuest(item.id);
										}}
									>
										{completedQuests.includes(item.id) ? 'X' : ''}
									</button>
								</div>
							</div>
						))}
				</details>
			);
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
			<Header counter={0} onButtonClick={''} />
			<main className='quests'>
				{showMap()}
				{sortLocation()}
			</main>
			<Footer counter={0} />
		</>
	);
}

export default Wildhunt;
