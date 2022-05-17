export const TechBook = ({techBook}) => {

	const handleDeleteTechBook = (techBook) => {
		const _techBooks = techBooks.filter(m => m.id !== techBook.id);
		setTechBooks(_techBooks);
	}

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
