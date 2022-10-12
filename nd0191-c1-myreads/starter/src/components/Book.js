import BookShelfChanger from "../components/BookShelfChanger";
import PropTypes from "prop-types";
import * as BooksAPI from "../utils/BooksAPI";
import { useState } from "react";

const Book = ({ bookData }) => {
	const [bookShelf, setBookShelf] = useState(bookData.shelf);

	const updateBook = async (book, shelf) => {
		await BooksAPI.update(book, shelf);
	};

	const onHandleChangeShelf = (shelf) => {
		setBookShelf(shelf);
		updateBook(bookData, shelf);
	};

	return (
		<div key={bookData.title} className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage:
							bookData.imageLinks !== undefined &&
							bookData.imageLinks["thumbnail"] !== undefined
								? `url(${bookData.imageLinks["thumbnail"]})`
								: `url("")`,
					}}
				></div>
				<BookShelfChanger
					key={bookShelf}
					shelf={bookShelf}
					onHandleChange={onHandleChangeShelf}
				/>
			</div>
			<div className="book-title">{bookData.title}</div>
			{bookData.authors !== undefined &&
				bookData.authors.map((author) => (
					<div key={author} className="book-authors">
						{author}
					</div>
				))}
		</div>
	);
};
Book.propTypes = {
	bookData: PropTypes.object.isRequired,
};
export default Book;
