import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
import PropTypes from "prop-types";

const ListBooks = ({ books, updateBookShelf }) => {
	const shelves = ["Currently Reading", "Want to Read", "Read"];
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				{books.length > 0 &&
					shelves.map((shelf) => (
						<BookShelf
							key={shelf}
							title={shelf}
							books={books}
							updateBookShelf={updateBookShelf}
						/>
					))}
			</div>
			<div className="open-search">
				<Link to="/search">Add a book</Link>
			</div>
		</div>
	);
};
ListBooks.propTypes = {
	books: PropTypes.array.isRequired,
	updateBookShelf: PropTypes.func.isRequired,
};
export default ListBooks;
