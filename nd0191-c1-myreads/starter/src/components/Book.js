import BookShelfChanger from "./BookShelfChanger";
const Book = ({ url, title, authors }) => {
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url(${url})`,
					}}
				></div>
				<BookShelfChanger />
			</div>
			<div className="book-title">{title}</div>
			<div className="book-authors">{authors}</div>
		</div>
	);
};
export default Book;
