import Book from "./Book";
import { useEffect } from "react";
import PropTypes from "prop-types";

const SearchBooksResults = ({ searchedBooks, onUpdateBook }) => {
	// useEffect(() => {
	// 	// console.log("App");
	// }, [searchedBooks]);
	return (
		<div className="search-books-results">
			<ol className="books-grid">
				{console.log(searchedBooks)}
				{searchedBooks.map((elem) => (
					<Book key={elem.id} bookData={elem} onUpdateBook={onUpdateBook} />
				))}
			</ol>
		</div>
	);
};
SearchBooksResults.propTypes = {
	onUpdateBook: PropTypes.func.isRequired,
	searchedBooks: PropTypes.array.isRequired,
};
export default SearchBooksResults;
