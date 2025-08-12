import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from './App';

describe('App Component', () => {
  it('renders input, button and list', () => {
    const {getByTestId, getByText} = render(<App />);

    expect(getByTestId('input-area')).toBeTruthy();
    expect(getByText('Add')).toBeTruthy();
    expect(getByTestId('list')).toBeTruthy();
  });

  it('adds an item to the list when button is pressed', () => {
    const {getByTestId, getByText, queryByText} = render(<App />);

    const input = getByTestId('input-area');
    const button = getByTestId('add-button');

    fireEvent.changeText(input, 'Test Item');
    fireEvent.press(button);

    expect(queryByText('Test Item')).toBeTruthy();
  });

  it('does not add empty item to the list', () => {
    const {getByTestId, queryByText} = render(<App />);
    const button = getByTestId('add-button');

    fireEvent.press(button);

    expect(queryByText('')).toBeNull();
  });
});
