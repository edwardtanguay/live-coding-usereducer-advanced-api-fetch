import { useState, useEffect } from 'react';

const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export const PageBooks = () => {
	const [techBooks, setTechBooks] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(techBooksUrl);
			const _techBooks = await response.json();
			setTechBooks(_techBooks);
		})();
	}, []);

	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>I am reading the following {techBooks.length} tech books:</p>
			<div className="techBooks">
				{techBooks.map((techBook, index) => {
					return (
						<div className="techBook">
							<img
								src={`https://edwardtanguay.netlify.app/share/images/techBooks/${techBook.idCode}.jpg`}
								alt="book cover"
							/>
							<div className="info">
								<div className="title">
									{techBook.title}
								</div>
								<div className="description">
									{techBook.description}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
