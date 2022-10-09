import Book from "./Book";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const BookShelf = ({ title, books, onUpdateBook }) => {
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
		console.log("BookShelf");
	}, [books, title]);
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{displayingBooks.map((book) => (
						<li key={book.title}>
							<Book
								book={book}
								url={book.imageLinks["thumbnail"]}
								title={book.title}
								authors={book.authors[0]}
								onUpdateBook={onUpdateBook}
							/>
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
	onUpdateBook: PropTypes.func.isRequired,
};
export default BookShelf;
