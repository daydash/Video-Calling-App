import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import LoginPage from "./components/LoginPage.jsx";
import SignupPage from "./components/SignupPage.jsx";
import ListPage from "./components/ListPage.jsx";
import VideoCallPage from "./components/VideoCallPage.jsx";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles.css";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignupPage} />
					<Route path="/list" component={ListPage} />
					<Route path="/call/:userId" component={VideoCallPage} />
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
