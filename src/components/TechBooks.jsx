import { TechBook } from './TechBook';

export const TechBooks = ({ techBooks }) => {
	return (
		<div className="techBooks">
			{techBooks.map((techBook, index) => {
				return <TechBook techBook={techBook} />;
			})}
		</div>
	);
};
