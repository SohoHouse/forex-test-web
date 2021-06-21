import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import New from '../routes/new';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<New path="/new" />
		</Router>
	</div>
)

export default App;
