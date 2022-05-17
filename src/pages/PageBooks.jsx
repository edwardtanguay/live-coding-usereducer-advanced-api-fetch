import { useEffect, useReducer } from 'react';
import { TechBooks } from '../components/TechBooks';

const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

const techBooksReducer = (techBooks, action) => {
	switch (action.type) {
		case 'load':
			return [...action.payload];
		case 'delete':
			const _techBooks = techBooks.filter(m => m.id !== action.payload.id);
			return [..._techBooks];
	}
}

export const PageBooks = () => {
	const [techBooks, dispatchTechBooks] = useReducer(techBooksReducer,[]);

	useEffect(() => {
		(async () => {
			const response = await fetch(techBooksUrl);
			const _techBooks = await response.json();
			// setTechBooks(_techBooks);
			dispatchTechBooks({ type: 'load', payload: _techBooks });
		})();
	}, []);

	const handleDeleteTechBook = (techBook) => {
		dispatchTechBooks({ type: 'delete', payload: techBook });
	}

	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>I am reading the following {techBooks.length} tech books:</p>
			<TechBooks techBooks={techBooks} handleDeleteTechBook={handleDeleteTechBook} />
		</div>
	);
};
