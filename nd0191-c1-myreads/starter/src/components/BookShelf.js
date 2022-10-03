import Book from "./Book";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const BookShelf = ({ title, booksOfShelf }) => {
	const [displayingBooks, setDisplayingBooks] = useState([]);
	useEffect(() => {
		setDisplayingBooks(booksOfShelf);
	}, []);
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{/* <li>
						<Book
							url={
								"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
							}
							title={"Ender's Game"}
							authors={"Orson Scott Card"}
						/>
					</li> */}
					<li>
						{" "}
						{displayingBooks.map((book) => (
							<Book
								url={book.imageLinks["thumbnail"]}
								title={book.title}
								authors={book.authors[0]}
							/>
						))}
					</li>
				</ol>
			</div>
		</div>
	);
};

BookShelf.propTypes = {
	title: PropTypes.string.isRequired,
	booksOfShelf: PropTypes.array.isRequired,
};
export default BookShelf;
