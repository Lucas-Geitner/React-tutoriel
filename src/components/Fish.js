import React from 'react';
import { formatPrice } from '../helpers'

class Fish extends React.Component {
  render() {
    const {name, image, desc, price} = this.props.details;
    const isAvailable = this.props.details.status === 'available';
    const buttonText = isAvailable ? 'Add to order' : 'Sold out !';
    return(
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">
            {formatPrice(price)}
          </span>
        </h3>
        <p>
          {desc}
        </p>
        <button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvailable}> {buttonText} </button>
      </li>
    )
  }
}

Fish.propTypes = {
  index: React.PropTypes.string.isRequired,
  details: React.PropTypes.object.isRequired,
  addToOrder: React.PropTypes.func.isRequired,
};
export default Fish;
