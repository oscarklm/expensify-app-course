import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should set text filter to value', () => {
  const result = setTextFilter('coffee');
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'coffee'
  });
});

test('should set sortBy to amount', () => {
  const result = sortByAmount();
  expect(result).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should set sortBy to date', () => {
  const result = sortByDate();
  expect(result).toEqual({ type: 'SORT_BY_DATE' });
});

test('should set startDate', () => {
  const result = setStartDate(100);
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate: 100
  });
});

test('should set endDate', () => {
  const result = setEndDate(250);
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: 250
  });
});
