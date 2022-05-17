import { TechBook } from './TechBook';

export const TechBooks = ({ techBooks, dispatchTechBooks={dispatchTechBooks} }) => {
	return (
		<div className="techBooks">
			{techBooks.map((techBook, index) => {
				return <TechBook techBook={techBook} dispatchTechBooks={dispatchTechBooks} />;
			})}
		</div>
	);
};
