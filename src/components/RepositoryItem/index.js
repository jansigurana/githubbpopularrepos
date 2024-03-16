// Write your code here
import './index.css'
const RepositoryItem = props => {
    const {repositoryDetails} = props
    const {
        name,
        imageUrl,
        starsCount,
        forksCount,
        issuesCount,
    } = repositoryDetails
    return (
        <li className="repository-item">
          <img className="repository-image" src={imageUrl} alt={name}/>
          <h1 className="repository-name">{name}</h1>
          <div className="stars-container">
            <img 
              src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
              className="stars-icon"
              alt="stars"
              />
              <p className="stars-text">{starsCount} stars</p>
          </div>
          <div className="stars-container">
           <img 
             src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
             className="stars-icon"
             alt="forks"
             />
             <p className="stars-text">{forksCount} forks</p>
          </div>
          <div className="stars-container">
            <img 
              src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
              className="stars-icon"
              alt="open issues"
              />
              <p className="stars-text">{issuesCount} open issues</p>
          </div>
        </li>
    )
 }
export default RepositoryItem
