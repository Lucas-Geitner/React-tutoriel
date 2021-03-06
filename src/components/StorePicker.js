import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    // First grab the text from the box
    event.preventDefault();
    console.log('You change the URL');
    const storeId = this.storeInput.value;
    // Second we are going to transition from / to /store/:StoreID
    this.context.router.transitionTo(`store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2> Please Enter a Store </h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input } }/>
        <button type="submit"> visited store </button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object,
};

export default StorePicker;
