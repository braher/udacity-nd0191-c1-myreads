import Book from "./Book";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BookShelf = ({ title, books, updateBookShelf }) => {
	const [displayingBooks, setDisplayingBooks] = useState([]);
	useEffect(() => {
		let booksOfTheShelf = books;
		switch (title) {
			case "Currently Reading":
				booksOfTheShelf = books.filter((book) => {
					return book.shelf === "currentlyReading";
				});
				break;
			case "Want to Read":
				booksOfTheShelf = books.filter((book) => {
					return book.shelf === "wantToRead";
				});
				break;
			case "Read":
				booksOfTheShelf = books.filter((book) => {
					return book.shelf === "read";
				});
				break;
			default:
				console.log(title);
		}
		setDisplayingBooks(booksOfTheShelf);
	}, [books, title]);
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{displayingBooks.map((book) => (
						<li key={book.id}>
							<Book
								key={book.title}
								bookData={book}
								updateBookShelf={updateBookShelf}
							/>
							<Link to={`/books/${book.id}`}>More info (+)</Link>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

BookShelf.propTypes = {
	title: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	updateBookShelf: PropTypes.func.isRequired,
};
export default BookShelf;
