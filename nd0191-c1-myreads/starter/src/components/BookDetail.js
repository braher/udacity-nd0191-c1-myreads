import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import { Link } from "react-router-dom";

const BookDetail = () => {
	const { bookId } = useParams();
	const [thisBook, setThisBook] = useState(null);

	useEffect(() => {
		console.log("using effect");
		const getBook = async () => {
			await BooksAPI.get(bookId).then((book) => {
				setThisBook(book);
			});
		};
		getBook();
	}, []);

	return (
		<div className="list-books-content">
			<Link to="/" className="close-search">
				Close
			</Link>

			<div className="bookshelf-books">
				<div className="center">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage:
								thisBook?.imageLinks !== undefined &&
								thisBook?.imageLinks["thumbnail"] !== undefined
									? `url(${thisBook.imageLinks["thumbnail"]})`
									: `url("")`,
						}}
					></div>
				</div>
				<div className="book-title">
					Title: <span className="book-authors">{thisBook?.title}</span>
				</div>
				<div className="book-title">
					Subtitle:
					<span className="book-authors">{thisBook?.subtitle}</span>
				</div>
				<div className="book-title">Authors:</div>

				{thisBook?.authors.map((author) => (
					<div key={author} className="book-authors">
						{author}
					</div>
				))}
				<p className="book-title">
					Description:{" "}
					<span className="book-authors">{thisBook?.description}</span>
				</p>
			</div>
		</div>
	);
};
export default BookDetail;
