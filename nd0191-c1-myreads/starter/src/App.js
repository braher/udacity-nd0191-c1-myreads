import "./App.css";
import { useState, useEffect } from "react";
import Book from "./components/Book";
import BookShelf from "./components/BookShelf";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./utils/BooksAPI";
import { Route, Routes, useNavigate, Link } from "react-router-dom";

function App() {
	// const [showSearchPage, setShowSearchpage] = useState(false);
	const [books, setBooks] = useState([]);
	const shelves = ["Currently Reading", "Want to Read", "Read"];

	const getBooks = async () => {
		const res = await BooksAPI.getAll();
		setBooks(res);
	};
	const updateBook = async (book, shelf) => {
		const res = await BooksAPI.update(book, shelf);
		getBooks();
	};
	useEffect(() => {
		getBooks();
		console.log("App");
	}, [books]);

	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							{books.length > 0 &&
								shelves.map((shelf) => (
									<div key={shelf}>
										<BookShelf
											title={shelf}
											books={books}
											onUpdateBook={updateBook}
										/>
									</div>
								))}
						</div>
						{/* <div className="open-search">
							<a onClick={() => setShowSearchpage(!showSearchPage)}>
								Add a book
							</a>
						</div> */}
						<div className="open-search">
							<Link to="/search">Add a book</Link>
						</div>
					</div>
				}
			/>
			<Route path="/search" element={<SearchBooks />} />
		</Routes>
	);
}

export default App;
