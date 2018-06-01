import React, {Component} from 'react'  //Or const Component = React.Component

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: '' };
    }
    render(){
        return (
            <div>
                <input onChange={(e)=>this.onInputChange(e.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term: term});
        this.props.onSearchChange(term);
    }
}

export default SearchBar;