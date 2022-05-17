import { useEffect, useReducer } from 'react';
import { createContext } from 'react';

export const AppContext = createContext();

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

export const AppProvider = ({ children }) => {
	const [techBooks, dispatchTechBooks] = useReducer(techBooksReducer, []);

	useEffect(() => {
		(async () => {
			const response = await fetch(techBooksUrl);
			const _techBooks = await response.json();
			dispatchTechBooks({ type: 'load', payload: _techBooks });
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				techBooks,
				dispatchTechBooks,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
