import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {questList} = this.props
    const {answerText} = questList
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onChangeActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderButtonImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onChangeActive}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {questList} = this.props
    const {questionText} = questList

    return (
      <li className="list-container">
        <div className="question-heading">
          <h1 className="quest-heading">{questionText}</h1>
          {this.renderButtonImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
