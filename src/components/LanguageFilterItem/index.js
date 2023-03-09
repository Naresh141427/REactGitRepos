import './index.css'

const LanguageFilterItem = props => {
  const {tabDetails, activeTabItem, isActive} = props
  const {id, language} = tabDetails

  const onSelectingTab = () => {
    activeTabItem(id)
  }

  const className = isActive ? 'active-tab-button' : 'tab-button'

  return (
    <li className="tab-item">
      <button className={className} type="button" onClick={onSelectingTab}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
