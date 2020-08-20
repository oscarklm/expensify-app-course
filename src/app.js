import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water bill',
    note: 'This has been paid.',
    amount: 4500,
    createdAt: 450
  })
);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    note: 'From the new house...',
    amount: 1500,
    createdAt: 650
  })
);
store.dispatch(
  addExpense({
    description: 'Rent',
    note: 'Summer Villa.',
    amount: 109500,
    createdAt: 250
  })
);
store.dispatch(
  addExpense({
    description: 'Pizza',
    note: 'Yummy!.',
    amount: 925,
    createdAt: 250
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
