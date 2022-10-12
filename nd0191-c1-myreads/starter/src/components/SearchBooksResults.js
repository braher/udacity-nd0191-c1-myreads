import Book from "./Book";
import PropTypes from "prop-types";

const SearchBooksResults = ({ searchedBooks, updateBookShelf }) => {
	return (
		<div className="search-books-results">
			<ol className="books-grid">
				{searchedBooks.map((elem) => (
					<li key={elem.id}>
						<Book
							key={elem.title}
							bookData={elem}
							updateBookShelf={updateBookShelf}
						/>
					</li>
				))}
			</ol>
		</div>
	);
};
SearchBooksResults.propTypes = {
	searchedBooks: PropTypes.array.isRequired,
	updateBookShelf: PropTypes.func.isRequired,
};
export default SearchBooksResults;
