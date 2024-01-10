// AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	// const [user, setUser] = useState(null);
	const [user, setUser] = useState({ name: "Yash" });

	const login = (userData) => {
		// Add your authentication logic here
		setUser(userData);
	};

	const logout = () => {
		// Add your logout logic here
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
};
