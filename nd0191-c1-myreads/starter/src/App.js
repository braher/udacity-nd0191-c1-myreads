import "./App.css";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import { useState, useEffect } from "react";

function App() {
	const [books, setBooks] = useState([]);
	const [searchedBooks, setSearchedBooks] = useState([]);
	const maxResults = "10";

	const searchBooks = (query) => {
		const search = async () => {
			const searchResult =
				query !== "" ? await BooksAPI.search(query, maxResults) : [];
			//when no results found the api returns an error
			if (searchResult["error"] !== undefined) {
				setSearchedBooks([]);
			} else {
				searchResult.forEach((element) => {
					element.shelf = "none";
					for (let i = 0; i < books.length; i++) {
						if (element.id === books[i].id) {
							element.shelf = books[i].shelf;
							break;
						}
					}
				});
				setSearchedBooks(searchResult);
			}
		};
		search();
	};

	// Filter out the book and append it to the end of the list
	// so it appears at the end of whatever shelf it was added to.
	const updateBookShelf = (book, shelf) => {
		book.shelf = shelf;
		BooksAPI.update(book, shelf).then(() => {
			setBooks([...books.filter((b) => b.id !== book.id), book]);
		});
	};

	useEffect(() => {
		const getBooks = async () => {
			const res = await BooksAPI.getAll();
			setBooks(res);
		};
		let unmounted = false;
		if (!unmounted) {
			getBooks();
		}
		return () => {
			unmounted = true;
		};
	}, []);

	return (
		<Routes>
			<Route
				exact
				path="/"
				element={<ListBooks books={books} updateBookShelf={updateBookShelf} />}
			/>
			<Route
				path="/search"
				element={
					<SearchBooks
						searchBooks={searchBooks}
						searchResult={searchedBooks}
						updateBookShelf={updateBookShelf}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
