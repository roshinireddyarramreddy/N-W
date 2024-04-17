// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    result: '',
    detailsList: resultList,
  }

  searchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  selection = id => {
    const ans = this.detailsList.filter(each => each.id === id)
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput, result, detailsList} = this.state
    const resultList = this.suggestionsList.filter(
      each => each.suggestion.toLowerCase().includes(searchInput),
      this.setState({detailsList: resultList}),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="card">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={result}
              onChange={this.searchInputChange}
            />
          </div>
          <ul className="list">
            {resultList.map(each => (
              <SuggestionItem
                suggestionDetails={each}
                key={each.id}
                selection={this.selection}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
