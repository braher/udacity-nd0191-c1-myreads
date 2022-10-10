import { useState } from "react";
import BookShelfChanger from "../components/BookShelfChanger";
import PropTypes from "prop-types";

const Book = ({ bookData, onUpdateBook }) => {
	const [currentShelf, setCurrentShelf] = useState("");
	const onHandleChangeShelf = (shelf) => {
		setCurrentShelf(shelf);
		onUpdateBook(bookData, shelf);
	};
	return (
		<li>
			<div className="book">
				<div className="book-top">
					{/* {console.log("Book")} */}
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${bookData.imageLinks["thumbnail"]})`,
						}}
					></div>
					<BookShelfChanger
						shelf={bookData.shelf}
						onHandleChange={onHandleChangeShelf}
					/>
				</div>
				<div className="book-title">{bookData.title}</div>
				{bookData.authors.map((author) => (
					<div className="book-authors">{author}</div>
				))}
				{/* <div className="book-authors">{book.authors[0]}</div> */}
			</div>
		</li>
	);
};
Book.propTypes = {
	bookData: PropTypes.object.isRequired,
	onUpdateBook: PropTypes.func.isRequired,
};
export default Book;
