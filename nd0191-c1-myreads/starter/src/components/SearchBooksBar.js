import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const SearchBooksBar = ({ handleSearch }) => {
	const [query, setQuery] = useState("");

	const onHandleSearch = (e) => {
		let text = e.target.value.trim();
		setQuery(text);
		handleSearch(query);
	};
	return (
		<div className="search-books-bar">
			<Link to="/" className="close-search">
				Close
			</Link>
			<div className="search-books-input-wrapper">
				<input
					type="text"
					placeholder="Search by title, author, or ISBN"
					onChange={onHandleSearch}
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
