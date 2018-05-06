import React, {Component} from 'react';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search = () => {
    this.props.onSearch(this.state.searchTerm);
  }

  handleTermChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render(){
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
               onChange={this.handleTermChange} />
        <a>SEARCH</a>
      </div>
    );
  }
}


export default SearchBar;