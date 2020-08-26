import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClick = (e) => {
    e.preventDefault();
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove Expense</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => editExpense(id, expense),
  removeExpense: (id) => removeExpense(id)
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
