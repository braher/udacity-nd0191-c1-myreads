import PropTypes from "prop-types";

const BookShelfChanger = ({ shelf, onHandleChange }) => {
	const handleChange = (event) => {
		onHandleChange(event.target.value);
	};
	return (
		<div className="book-shelf-changer">
			<select value={shelf} onChange={handleChange}>
				<option value="none" disabled>
					Move to...
				</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				{shelf == undefined ? (
					<option value="none">None</option>
				) : (
					<option value="none">None</option>
				)}
			</select>
		</div>
	);
};

BookShelfChanger.propTypes = {
	shelf: PropTypes.string.isRequired,
	onHandleChange: PropTypes.func.isRequired,
};
export default BookShelfChanger;
