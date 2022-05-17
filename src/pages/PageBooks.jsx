import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { TechBooks } from '../components/TechBooks';

export const PageBooks = () => {
	const { techBooks } = useContext(AppContext);

	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>I am reading the following {techBooks.length} tech books:</p>
			<TechBooks/>
		</div>
	);
};
