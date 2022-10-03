import { useEffect } from "react";

const BookShelfChanger = ({ shelf, onHandleChange }) => {
	const shelves = ["Currently Reading", "Want to Read", "Read"];
	useEffect(() => {
		// switch(shelf){
		// 	case shelf=="currentlyReading"
		// }
	});
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
				<option value="none">None</option>
			</select>
		</div>
	);
};
export default BookShelfChanger;
