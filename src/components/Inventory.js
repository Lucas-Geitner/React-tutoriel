import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  constructor() {
    super()
    this.renderInvenory = this.renderInvenory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, key) {
    const fish = this.props.fishes[key]
    const updateFish = {
      ...fish,
      [e.target.name]: e.target.value
    };
    this.props.updateFish(key, updateFish)
  }
  renderInvenory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input
          type="text"
          placeholder="Fish name"
          value={fish.name}
          name="name"
          onChange={(e) => this.handleChange(e, key)}
        />
        <input
          type="text"
          name="price"
          placeholder="Fish price"
          value={fish.price}
          onChange={(e) => this.handleChange(e, key)}
        />
        <select name="status" onChange={(e) => this.handleChange(e, key)}>
          <option value="available">
            Fresh !
          </option>
          <option value="unavailable">
            Sold out
          </option>
        </select>
        <textarea
          placeholder="Fish Desc"
          name="desc"
          value={fish.desc}
          onChange={(e) => this.handleChange(e, key)}
        />
        <input
          type="text"
          name="image"
          placeholder="Fish Image"
          value={fish.image}
          onChange={(e) => this.handleChange(e, key)}
        />
        <button onClick={(e) => this.props.deleteFish(key)}>
          Remove Fish
        </button>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2> Inventory </h2>
        { Object
          .keys(this.props.fishes)
          .map(this.renderInvenory)
        }
        <AddFishForm
          addFish={this.props.addFish}
        />
        <button
          onClick={this.props.loadSamples}>
           Load simple Fishes
         </button>
      </div>
    );
  }
}

export default Inventory;
