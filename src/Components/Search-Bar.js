import React, { Component } from "react";
import "./List-image.css"
class SearchBar extends Component{

    state={term:''}
    
    onsub= even =>{
        even.preventDefault();
        this.props.onsubmit(this.state.term);
        this.props.onTermsubmit(this.state.term)
    }

    render(){
            
        return <div className="ui segment "> 
            <form className="ui form" onSubmit={this.onsub}>
                <div className="field">
                    <label>image search & videos</label>
                <input type="text"
                value={this.state.term}
                onChange={(event)=> this.setState({term:event.target.value}) } />
            
                </div>
            </form>
        </div>
}
}

export default SearchBar