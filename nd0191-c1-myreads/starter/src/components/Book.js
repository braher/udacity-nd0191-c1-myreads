import { useState } from "react";
import BookShelfChanger from "../components/BookShelfChanger";
import PropTypes from "prop-types";

const Book = ({ book, onUpdateBook }) => {
	const [currentShelf, setCurrentShelf] = useState("");
	const onHandleChangeShelf = (shelf) => {
		setCurrentShelf(shelf);
		onUpdateBook(book, shelf);
	};
	return (
		<div className="book">
			<div className="book-top">
				{console.log("Book")}
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url(${book.imageLinks["thumbnail"]})`,
					}}
				></div>
				<BookShelfChanger
					shelf={book.shelf}
					onHandleChange={onHandleChangeShelf}
				/>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">{book.authors[0]}</div>
		</div>
	);
};
Book.propTypes = {
	book: PropTypes.object.isRequired,
	onUpdateBook: PropTypes.func.isRequired,
};
export default Book;
