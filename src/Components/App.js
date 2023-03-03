import React, { Component } from "react";
import SearchBar from "./Search-Bar";
import Unsplash from "../Api/Unsplash";
import ListImages from "./List-images";
import "./List-image.css"
import Youtube from "../Api/Youtube"
import Listvideos from "./List-videos";
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
class App extends Component{
    state={images:[],videos:[]}
    onsearhsubmit = async (term)=>{
        const respons=await Unsplash.get('/search/photos',{
        params:{query:term,
                per_page:20}});
        this.setState({images:respons.data.results});
    };  
    onTermsubmit=async(term)=>{
    const responss=await Youtube.get('/search',{
        params:{q:term}
    }) 
  this.setState({videos:responss.data.items})  
    
}; 
    render(){
    return(
    <div className="ui container ">
        <SearchBar  onsubmit={this.onsearhsubmit} onTermsubmit={this.onTermsubmit} />
        <ListImages images={this.state.images} />
        <Listvideos  videos={this.state.videos} />
    </div>
        )}}
export default App
