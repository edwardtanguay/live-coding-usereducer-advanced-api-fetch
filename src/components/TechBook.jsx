import { TECHBOOKS_ACTION } from '../pages/PageBooks';

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
								type: TECHBOOKS_ACTION.DELETE,
								payload: techBook,
							})
						}
					>
						Delete
					</button>
					<button
						onClick={() =>
							dispatchTechBooks({
								type: TECHBOOKS_ACTION.MARK_AS_FINISHED,
								payload: techBook,
							})
						}
					>
						Mark as Finished
					</button>
					<button
						onClick={() =>
							dispatchTechBooks({
								type: TECHBOOKS_ACTION.DECREASE_RANK,
								payload: techBook,
							})
						}
					>
						-
					</button>
					<button
						onClick={() =>
							dispatchTechBooks({
								type: TECHBOOKS_ACTION.INCREASE_RANK,
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
