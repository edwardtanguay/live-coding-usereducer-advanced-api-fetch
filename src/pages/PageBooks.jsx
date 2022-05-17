import { useEffect, useReducer, useContext } from 'react';
import { TechBooks } from '../components/TechBooks';
import { AppContext } from '../AppContext';

const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export const TECHBOOKS_ACTION = {
	LOAD: 'load',
	DELETE: 'delete',
	MARK_AS_FINISHED: 'markAsFinished',
	DECREASE_RANK: 'decreaseRank',
	INCREASE_RANK: 'increaseRank',
};

const techBooksReducer = (techBooks, action) => {
	switch (action.type) {
		case TECHBOOKS_ACTION.LOAD:
			return [...action.payload];
		case TECHBOOKS_ACTION.DELETE: 
			const _techBooks = techBooks.filter(
				(m) => m.id !== action.payload.id
			);
			return [..._techBooks];
		case TECHBOOKS_ACTION.MARK_AS_FINISHED:
			action.payload.title = action.payload.title + ' - FINISHED';
			return [...techBooks];
		case TECHBOOKS_ACTION.DECREASE_RANK:
			action.payload.rank = (action.payload.rank - 0.1).toFixed(1);
			return [...techBooks];
		case TECHBOOKS_ACTION.INCREASE_RANK:
			action.payload.rank = (Number(action.payload.rank) + 0.1).toFixed(
				1
			);
			return [...techBooks];
	}
};

export const PageBooks = () => {
	const { testMessage } = useContext(AppContext);
	const [techBooks, dispatchTechBooks] = useReducer(techBooksReducer, []);

	useEffect(() => {
		(async () => {
			const response = await fetch(techBooksUrl);
			const _techBooks = await response.json();
			dispatchTechBooks({ type: 'load', payload: _techBooks });
		})();
	}, []);

	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>I am reading the following {techBooks.length} tech books:</p>
			<TechBooks
				techBooks={techBooks}
				dispatchTechBooks={dispatchTechBooks}
			/>
		</div>
	);
};
