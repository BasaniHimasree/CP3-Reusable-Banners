import './index.css'

const BannerCardItem = props => {
  const {eachCard} = props
  const {headerText, description, className} = eachCard

  return (
    <li className={`item ${className}`}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button type="button">Show More</button>
    </li>
  )
}

export default BannerCardItem
