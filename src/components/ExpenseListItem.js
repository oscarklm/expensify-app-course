import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, note, amount }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{note}</p>
    <p>{amount}</p>
  </div>
);

export default connect()(ExpenseListItem);
