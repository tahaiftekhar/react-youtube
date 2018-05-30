import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyA5iQPZiyFRIADX5xUZealbrmAiKU8xz3A";

class App extends Component{
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=> {
			this.setState({ videos });
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector('.container'));