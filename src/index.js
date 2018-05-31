import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = "AIzaSyA5iQPZiyFRIADX5xUZealbrmAiKU8xz3A";

class App extends Component{
	constructor(props){
		super(props);

		this.state = {
			videos: [],
            selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=> {
			this.setState({
				videos: videos,
                selectedVideo: videos[0]
			});
			console.log(this.state.videos);
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector('.container'));