import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import { Link } from "react-router-dom";

const BookDetail = () => {
	const { bookId } = useParams();
	const [thisBook, setThisBook] = useState(null);
	// const getBook = async () => {
	// 	await BooksAPI.get(bookId).then((data) => {
	// 		setThisBook(data.book);
	// 	});
	// };
	// getBook();

	useEffect(() => {
		console.log("using effect");
		const getBook = async () => {
			await BooksAPI.get(bookId).then((book) => {
				setThisBook(book);
			});
		};
		getBook();
	}, []);

	return (
		<div>
			<Link to="/" className="close-search">
				Close
			</Link>
			<h1>{thisBook.title}</h1>
			<p>{thisBook.description}</p>
		</div>
	);
};
export default BookDetail;
