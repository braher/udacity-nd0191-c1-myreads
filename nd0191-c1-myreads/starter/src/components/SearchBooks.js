import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import SearchBooksResults from "./SearchBooksResults";
import SearchBooksBar from "./SearchBooksBar";

const SearchBooks = ({ onUpdateBook }) => {
	const [query, setQuery] = useState("");
	const [searchedBooks, setSearchedBooks] = useState([]);
	const maxResults = "10";

	//useEffect(() => {}, [query]);
	const handleSearch = async (q) => {
		setQuery(q);
		const res = query != "" ? await BooksAPI.search(q, maxResults) : [];
		setSearchedBooks(res);
	};

	return (
		<div className="search-books">
			<SearchBooksBar handleSearch={handleSearch} />
			<SearchBooksResults
				searchedBooks={searchedBooks}
				onUpdateBook={onUpdateBook}
			/>
		</div>
	);
};
SearchBooks.propTypes = {
	onUpdateBook: PropTypes.func.isRequired,
};
export default SearchBooks;
