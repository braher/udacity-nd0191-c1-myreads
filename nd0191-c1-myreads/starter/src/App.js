import "./App.css";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<ListBooks />} />
			<Route path="/search" element={<SearchBooks />} />
		</Routes>
	);
}

export default App;
