import PropTypes from "prop-types";

const BookShelfChanger = ({ shelf, onHandleChange }) => {
	const handleChange = (event) => {
		onHandleChange(event.target.value);
	};
	return (
		<div key={shelf} className="book-shelf-changer">
			<select value={shelf} onChange={handleChange}>
				<option disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
};

BookShelfChanger.propTypes = {
	onHandleChange: PropTypes.func.isRequired,
};
export default BookShelfChanger;
