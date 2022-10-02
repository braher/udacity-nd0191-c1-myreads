import { useState } from "react";
import Book from "./Book";
const BookShelf = ({ title, books }) => {
	// const [booksOfShelf, setBooksOfShelf] = useState([]);
	// const displayingBooks = () => {};
	// return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map((book) => (
						<li>
							<Book
								url={book.imageLinks["thumbnail"]}
								title={book.title}
								authors={book.authors[0]}
							/>
						</li>
					))}

					<li>
						<Book
							url={
								"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
							}
							title={"Ender's Game"}
							authors={"Orson Scott Card"}
						/>
					</li>
				</ol>
			</div>
		</div>
	);
};
export default BookShelf;
