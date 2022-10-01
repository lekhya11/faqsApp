import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faq-container">
        <h1 className="Heading">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(eachQues => (
            <FaqItem key={eachQues.id} faqsList={eachQues} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
