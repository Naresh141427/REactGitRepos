import './index.css'

const RepositoryItem = props => {
  const {reposList} = props
  const {avatarUrl, name, starsCount, forksCount, issuesCount} = reposList

  return (
    <li className="repos-item">
      <div className="image-container">
        <img src={avatarUrl} className="avatar" alt={name} />
      </div>
      <h1 className="repos-header">{name}</h1>
      <div className="counts-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="icon"
          alt="star"
        />
        <p className="count">{starsCount} stars</p>
      </div>
      <div className="counts-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="icon"
          alt="forks"
        />
        <p className="count">{forksCount} forks</p>
      </div>
      <div className="counts-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="icon"
          alt="open issues"
        />
        <p className="count">{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
