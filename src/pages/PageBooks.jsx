import { useState, useEffect } from 'react';

const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export const PageBooks = () => {
	const [techBooks, setTechBooks] = useState([]);
	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>I am reading the following {techBooks.length} tech books:</p>
		</div>
	)
}