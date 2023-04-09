// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }

  onClickEmoji = () => {
    this.setState({
      isFeedbackGiven: true,
    })
  }

  render() {
    const {isFeedbackGiven} = this.state
    const {resources} = this.props
    const {emojis} = resources
    const displayItem =
      isFeedbackGiven === true ? (
        <div className="card-container">
          <img src={resources.loveEmojiUrl} alt="love emoji" className="img" />
          <h1 className="heading">Thank You</h1>
          <p>
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      ) : (
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-container">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="img"
                  />
                  <p className="name">{eachEmoji.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    return <div className="main-container">{displayItem}</div>
  }
}

export default Feedback
