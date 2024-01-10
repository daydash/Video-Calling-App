// LoginPage.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const LoginPage = () => {
	const history = useHistory();
	const { login } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		// Add your login logic here
		const userData = { email, password }; // Replace with actual authentication
		login(userData);
		history.push("/list");
	};

	return (
		<div className="form-container">
			<h2>Login</h2>
			<form>
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
				<button type="button" onClick={handleLogin}>
					Login
				</button>
			</form>
			<div className="link-container">
				{/* <a href="/forgot-password" className="link">
					Forgot Password?
				</a> */}
				<a href="/signup" className="link">
					Create an Account
				</a>
			</div>
		</div>
	);
};

export default LoginPage;
