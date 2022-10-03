import { useState } from "react";
import BookShelfChanger from "../components/BookShelfChanger";
import * as BooksAPI from "../utils/BooksAPI";

const Book = ({ book, url, title, authors }) => {
	const [currentShelf, setCurrentShelf] = useState("");
	const onHandleChangeShelf = (shelf) => {
		setCurrentShelf(shelf);
		const res = BooksAPI.update(book, shelf);
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
export default Book;
