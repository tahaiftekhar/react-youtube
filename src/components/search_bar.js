import React, {Component} from 'react'  //Or const Component = React.Component

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: '' };
    }
    render(){
        return (
            <div>
                <input onChange={(e)=>this.setState({term: e.target.value})} />
                <br />
                <h2>Value: {this.state.term}</h2>
            </div>
        );
    }

    // onInputChange(event){
    //     console.log(event.target.value);
    //     this.setState({term: event.target.value});
    // }
}

export default SearchBar;