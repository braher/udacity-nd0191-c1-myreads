import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import SearchBooksResults from "./SearchBooksResults";
import SearchBooksBar from "./SearchBooksBar";

const SearchBooks = () => {
	const [searchedBooks, setSearchedBooks] = useState([]);
	const maxResults = "10";

	const handleSearch = (query) => {
		const search = async () => {
			const res = query !== "" ? await BooksAPI.search(query, maxResults) : [];
			if (res["error"] !== undefined) {
				setSearchedBooks([]);
			} else {
				setSearchedBooks(res);
			}
		};
		search();
	};

	return (
		<div className="search-books">
			<SearchBooksBar handleSearch={handleSearch} />
			<SearchBooksResults searchedBooks={searchedBooks} />
		</div>
	);
};

export default SearchBooks;
