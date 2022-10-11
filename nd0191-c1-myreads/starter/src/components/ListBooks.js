import * as BooksAPI from "../utils/BooksAPI";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";

const ListBooks = () => {
	const [books, setBooks] = useState([]);
	const shelves = ["Currently Reading", "Want to Read", "Read"];

	const getBooks = async () => {
		const res = await BooksAPI.getAll();
		setBooks(res);
	};

	useEffect(() => {
		let unmounted = false;
		if (!unmounted) {
			getBooks();
		}
		return () => {
			unmounted = true;
		};
	});
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				{books.length > 0 &&
					shelves.map((shelf) => (
						<BookShelf key={shelf} title={shelf} books={books} />
					))}
			</div>
			<div className="open-search">
				<Link to="/search">Add a book</Link>
			</div>
		</div>
	);
};
export default ListBooks;
