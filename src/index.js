import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import CartProvide from './providers/cart/cart.provider';

import './index.css';
import App from './App';
import CartContext from './contexts/cart/cart.context';

ReactDOM.render(
  <CartProvide>
     <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  </CartProvide>,
  document.getElementById('root')
);
