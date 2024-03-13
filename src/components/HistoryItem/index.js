import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onclickButton = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="each-history-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="display-details-container">
        <div className="details-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="domain-name">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={onclickButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
