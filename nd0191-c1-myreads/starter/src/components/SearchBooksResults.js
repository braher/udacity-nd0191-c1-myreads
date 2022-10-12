import Book from "./Book";
import PropTypes from "prop-types";

const SearchBooksResults = ({ searchedBooks }) => {
	return (
		<div className="search-books-results">
			<ol className="books-grid">
				{console.log(searchedBooks)}
				{searchedBooks.map((elem) => (
					<Book key={elem.id} bookData={elem} />
				))}
			</ol>
		</div>
	);
};
SearchBooksResults.propTypes = {
	searchedBooks: PropTypes.array.isRequired,
};
export default SearchBooksResults;
