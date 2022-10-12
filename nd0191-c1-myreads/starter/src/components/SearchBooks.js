import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import SearchBooksResults from "./SearchBooksResults";
import SearchBooksBar from "./SearchBooksBar";

const SearchBooks = () => {
	const [searchedBooks, setSearchedBooks] = useState([]);
	const [booksOfTheShelf, setBooksOfTheShelf] = useState([]);

	const maxResults = "10";

	useEffect(() => {
		const getBooksOnShelf = async () => {
			const res = await BooksAPI.getAll();
			setBooksOfTheShelf(res);
		};
		let unmounted = false;
		if (!unmounted) {
			getBooksOnShelf();
		}
		return () => {
			unmounted = true;
		};
	}, []);

	const handleSearch = (query) => {
		const search = async () => {
			const searchResult =
				query !== "" ? await BooksAPI.search(query, maxResults) : [];
			//when no results found the api returns an error
			if (searchResult["error"] !== undefined) {
				setSearchedBooks([]);
			} else {
				searchResult.forEach((element) => {
					for (let i = 0; i < booksOfTheShelf.length; i++) {
						if (element.id === booksOfTheShelf[i].id) {
							element.shelf = booksOfTheShelf[i].shelf;
							break;
						}
					}
				});
				setSearchedBooks(searchResult);
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
