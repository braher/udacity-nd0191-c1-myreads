import SearchBooksResults from "./SearchBooksResults";
import SearchBooksBar from "./SearchBooksBar";
import PropTypes from "prop-types";

const SearchBooks = ({ searchBooks, searchResult }) => {
	const handleSearch = (query) => {
		searchBooks(query);
	};

	return (
		<div className="search-books">
			<SearchBooksBar handleSearch={handleSearch} />
			<SearchBooksResults searchedBooks={searchResult} />
		</div>
	);
};
SearchBooks.propTypes = {
	searchBooks: PropTypes.func.isRequired,
	searchResult: PropTypes.array.isRequired,
};
export default SearchBooks;
