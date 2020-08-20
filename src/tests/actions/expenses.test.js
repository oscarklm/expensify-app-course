import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// REMOVE_EXPENSE TEST CASE
test('should setup remove expense action object ', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// EDIT_EXPENSE TEST CASE
test('should setup edit expense action object ', () => {
  const action = editExpense('123abc', {
    description: 'test desc',
    note: 'test note',
    amount: 1000,
    createdAt: 0
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'test desc',
      note: 'test note',
      amount: 1000,
      createdAt: 0
    }
  });
});

// ADD_EXPENSE TEST CASE
test('should setup add expense action object ', () => {
  const expenseData = {
    description: '',
    note: '',
    amount: 150,
    createdAt: 0
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

// ADD_EXPENSE (EMPTY) TEST CASE

test('should setup add expense action object with empty default ', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
