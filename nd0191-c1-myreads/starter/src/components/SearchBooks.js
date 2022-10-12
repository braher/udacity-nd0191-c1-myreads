import SearchBooksResults from "./SearchBooksResults";
import SearchBooksBar from "./SearchBooksBar";
import PropTypes from "prop-types";

const SearchBooks = ({ searchBooks, searchResult, updateBookShelf }) => {
	const handleSearch = (query) => {
		searchBooks(query);
	};

	return (
		<div className="search-books">
			<SearchBooksBar handleSearch={handleSearch} />
			<SearchBooksResults
				searchedBooks={searchResult}
				updateBookShelf={updateBookShelf}
			/>
		</div>
	);
};
SearchBooks.propTypes = {
	searchBooks: PropTypes.func.isRequired,
	searchResult: PropTypes.array.isRequired,
	updateBookShelf: PropTypes.func.isRequired,
};
export default SearchBooks;
