import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import useDebounce from "../utils/useDebounce";

const SearchBooksBar = ({ handleSearch }) => {
	const [query, setQuery] = useState("");
	const debouncedValue = useDebounce(query, 500);

	const onHandleSearch = (e) => {
		let text = e;
		setQuery(text);
	};

	useEffect(() => {
		console.log("debounced");
		handleSearch(query.trim(debouncedValue));
	}, [debouncedValue]);

	return (
		<div className="search-books-bar">
			<Link to="/" className="close-search">
				Close
			</Link>
			<div className="search-books-input-wrapper">
				<input
					type="text"
					placeholder="Search by title, author, or ISBN"
					onChange={(event) => onHandleSearch(event.target.value)}
					value={query}
				/>
			</div>
		</div>
	);
};
SearchBooksBar.propTypes = {
	handleSearch: PropTypes.func.isRequired,
};
export default SearchBooksBar;
