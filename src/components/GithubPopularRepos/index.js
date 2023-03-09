import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeLanguageId: languageFiltersData[0].id,
    reposList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getGitRepos()
  }

  getGitRepos = async () => {
    this.setState({isLoading: true})

    const {activeLanguageId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`
    console.log(apiUrl)
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updateResponseData = data.popular_repos.map(eachRepo => ({
        id: eachRepo.id,
        avatarUrl: eachRepo.avatar_url,
        forksCount: eachRepo.forks_count,
        issuesCount: eachRepo.issues_count,
        name: eachRepo.name,
        starsCount: eachRepo.stars_count,
      }))
      this.setState({
        reposList: updateResponseData,
        isLoading: false,
      })
    }
  }

  activeTabItem = id => {
    this.setState({activeLanguageId: id}, this.getGitRepos)
  }

  renderLanguageFilterItems = () => {
    const {activeLanguageId} = this.state
    return (
      <ul className="tabs-list-container">
        {languageFiltersData.map(eachTab => (
          <LanguageFilterItem
            tabDetails={eachTab}
            key={eachTab.id}
            activeTabItem={this.activeTabItem}
            isActive={eachTab.id === activeLanguageId}
          />
        ))}
      </ul>
    )
  }

  renderRepositoryItems = () => {
    const {reposList} = this.state
    console.log(reposList)

    return (
      <ul className="repos-list">
        {reposList.map(each => (
          <RepositoryItem reposList={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="header">Popular</h1>
        {this.renderLanguageFilterItems()}

        {isLoading ? this.renderLoader() : this.renderRepositoryItems()}
      </div>
    )
  }
}

export default GithubPopularRepos
