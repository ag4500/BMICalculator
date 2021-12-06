import React from 'react';
import App from './App/App';
import User from './user';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const Home = () => {
	return (
		<>
			<Router>
				<div className="App">
					<Link to="/">Home</Link>
				</div>
				<Switch>
					<Route exact path="/" component={User} />
					<Route exact path="/calculator" component={App} />
				</Switch>
			</Router>
		</>
	);
};
export default Home;
