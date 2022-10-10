import Book from "./Book";
import { useEffect } from "react";

const SearchBooksResults = ({ searchedBooks, onUpdateBook }) => {
	useEffect(() => {
		// console.log("App");
	}, [searchedBooks]);
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
export default SearchBooksResults;
