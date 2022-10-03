import "./App.css";
import { useState, useEffect } from "react";
import Book from "./components/Book";
import BookShelf from "./components/BookShelf";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./utils/BooksAPI";

function App() {
	const [showSearchPage, setShowSearchpage] = useState(false);
	const [books, setBooks] = useState([]);
	const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
	const shelves = ["Currently Reading", "Want to Read", "Read"];

	useEffect(() => {
		const getBooks = async () => {
			const res = await BooksAPI.getAll();
			setBooks(res);
		};

		getBooks();
		console.log("App");
	}, []);
	const handleShowSearchpage = () => {
		setShowSearchpage(!showSearchPage);
	};
	return (
		<div className="app">
			{showSearchPage ? (
				<SearchBooks onSetShowSearchpage={handleShowSearchpage} />
			) : (
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						{books.length > 0 &&
							shelves.map((shelf) => (
								<div key={shelf}>
									<BookShelf title={shelf} books={books} />
								</div>
							))}
					</div>
					<div className="open-search">
						<a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
