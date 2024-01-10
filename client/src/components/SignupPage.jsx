// SignupPage.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const SignupPage = () => {
	const history = useHistory();
	const { login } = useAuth();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignup = async () => {
		// Add your signup logic here
		const userData = { name, email, password }; // Replace with actual authentication
		login(userData);
		history.push("/list");
	};

	return (
		<div className="form-container">
			<h2>Signup</h2>
			<form>
				<label>Name: </label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<label>Email: </label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<label>Password: </label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<button type="button" onClick={handleSignup}>
					Signup
				</button>

				{/* Link container section */}
				<div className="link-container">
					<div>Already have an account?</div>
					<a href="/login" className="link">
						Login here
					</a>
				</div>
			</form>
		</div>
	);
};

export default SignupPage;
