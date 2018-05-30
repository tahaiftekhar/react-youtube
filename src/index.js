import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyA5iQPZiyFRIADX5xUZealbrmAiKU8xz3A";

const App = ()=> {
	return (
		<div>
			<SearchBar />
		</div>
	);
}


ReactDom.render(<App />, document.querySelector('.container'));