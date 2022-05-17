export const TechBook = ({techBook, handleDeleteTechBook={handleDeleteTechBook}}) => {

	return (
		<div className="techBook">
			<img
				src={`https://edwardtanguay.netlify.app/share/images/techBooks/${techBook.idCode}.jpg`}
				alt="book cover"
			/>
			<div className="info">
				<div className="title">{techBook.title}</div>
				<div className="description">{techBook.description}</div>
				<div className="buttonArea">
					<button onClick={() => handleDeleteTechBook(techBook)}>Delete</button>
				</div>
			</div>
		</div>
	);
};
