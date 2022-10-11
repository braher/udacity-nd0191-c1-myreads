import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchBooksBar = ({ handleSearch }) => {
	const onHandleSearch = (e) => {
		handleSearch(e.target.value.trim());
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
				/>
			</div>
		</div>
	);
};
SearchBooksBar.propTypes = {
	handleSearch: PropTypes.func.isRequired,
};
export default SearchBooksBar;
