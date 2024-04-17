// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, key, selection} = props
  const {id, suggestion} = suggestionDetails
  const chooseSuggestion () => {
    selection(id)
  }
  return (
    <div className="container">
      <li className="list-container">
        <p className="para">{suggestion}</p>
        <button type="button" className="button" onClick={chooseSuggestion}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="img"
          />
        </button>
      </li>
    </div>
  )
}

export default SuggestionItem
