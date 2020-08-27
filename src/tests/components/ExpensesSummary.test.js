import React from 'react';
import { shallow } from 'enzyme';
import { filters } from '../fixtures/filters';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with multiple expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={2355838382} />
  );
  expect(wrapper).toMatchSnapshot();
});
