import { TechBook } from './TechBook';

export const TechBooks = ({ techBooks, handleDeleteTechBook={handleDeleteTechBook} }) => {
	return (
		<div className="techBooks">
			{techBooks.map((techBook, index) => {
				return <TechBook techBook={techBook} handleDeleteTechBook={handleDeleteTechBook} />;
			})}
		</div>
	);
};
