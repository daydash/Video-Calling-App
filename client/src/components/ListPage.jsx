// ListPage.js
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import "../css/ListPage.css"; // Import the CSS file

const ListPage = () => {
	const history = useHistory();
	const { logout } = useAuth();

	const handleLogout = () => {
		// Add your logout logic here
		logout();
		history.push("/login");
	};

	const handleCall = (userId) => {
		// Redirect to the video call page with the selected user's ID
		history.push(`/call/${userId}`);
	};

	return (
		<div className="container">
			<h2>List Page</h2>
			{/* Add logic to fetch and display active users */}
			<ul>
				<li onClick={() => handleCall("user1")}>User 1</li>
				<li onClick={() => handleCall("user2")}>User 2</li>
				{/* ... */}
			</ul>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default ListPage;
