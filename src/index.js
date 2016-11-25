import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';
import NotFund from './components/NotFund';

import StorePicker from './components/StorePicker';


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/store/:storeId" component={App} />
        <Miss component={NotFund} />
      </div>
    </BrowserRouter>
  )
}


render(<Root />, document.querySelector('#main'));
