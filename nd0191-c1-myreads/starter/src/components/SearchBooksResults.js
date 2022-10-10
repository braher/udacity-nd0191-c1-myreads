import Book from "./Book";

const SearchBooksResults = ({ searchedBooks, onUpdateBook }) => {
	return (
		<div className="search-books-results">
			<ol className="books-grid">
				{searchedBooks &&
					searchedBooks.map((book) => (
						<Book book={book} onUpdateBook={onUpdateBook} />
					))}
			</ol>
		</div>
	);
};
export default SearchBooksResults;
