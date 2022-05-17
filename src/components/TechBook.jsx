export const TechBook = ({
	techBook,
	dispatchTechBooks = { dispatchTechBooks },
}) => {
	return (
		<div className="techBook">
			<img
				src={`https://edwardtanguay.netlify.app/share/images/techBooks/${techBook.idCode}.jpg`}
				alt="book cover"
			/>
			<div className="info">
				<div className="title">{techBook.title}</div>
				<div className="description">{techBook.description}</div>
				<div className="rank">Rank = {techBook.rank}</div>
				<div className="buttonArea">
					<button
						onClick={() =>
							dispatchTechBooks({
								type: 'delete',
								payload: techBook,
							})
						}
					>
						Delete
					</button>
					<button
						onClick={() =>
							dispatchTechBooks({
								type: 'markAsFinished',
								payload: techBook,
							})
						}
					>
						Mark as Finished
					</button>
					<button
						onClick={() =>
							dispatchTechBooks({
								type: 'decreaseRank',
								payload: techBook,
							})
						}
					>
						-
					</button>
					<button
						onClick={() =>
							dispatchTechBooks({
								type: 'increaseRank',
								payload: techBook,
							})
						}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};
