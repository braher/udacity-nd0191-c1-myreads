import BookShelfChanger from "../components/BookShelfChanger";
import PropTypes from "prop-types";
import { useState } from "react";

const Book = ({ bookData, updateBookShelf }) => {
	const [bookShelf, setBookShelf] = useState(bookData.shelf);

	const onHandleChangeShelf = (shelf) => {
		setBookShelf(shelf);
		updateBookShelf(bookData, shelf);
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
	updateBookShelf: PropTypes.func.isRequired,
};
export default Book;
