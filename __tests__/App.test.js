/**
 * @format
 */

import 'react-native';
import React from 'react';
import debounce from 'lodash/debounce';
import App from '../App';

import {render, fireEvent, act} from '@testing-library/react-native';

jest.mock('lodash/debounce');
debounce.mockImplementation(fn => fn);

test('renders correctly', () => {
  const container = render(<App />);
  const {queryByTestId, rerender} = container;
  let swiperContainer = queryByTestId('swiper');
  expect(queryByTestId('tomato')).not.toBeNull();
  expect(swiperContainer.props.getItemCount()).toBe(0);
  act(() => fireEvent(queryByTestId('button-0'), 'onPress'));
  expect(debounce).toHaveBeenCalled();

  rerender(<App />);
  expect(queryByTestId('tomato')).not.toBeNull();
});
