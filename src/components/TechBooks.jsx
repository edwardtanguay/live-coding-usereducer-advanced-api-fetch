import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { TechBook } from './TechBook';

export const TechBooks = () => {
	const { techBooks } = useContext(AppContext);

	return (
		<div className="techBooks">
			{techBooks.map((techBook, index) => {
				return <TechBook techBook={techBook} />;
			})}
		</div>
	);
};