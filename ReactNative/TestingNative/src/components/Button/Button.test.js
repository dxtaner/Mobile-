import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './Button';

describe('Button Component', () => {
  it('renders correctly with title', () => {
    const {getByText} = render(<Button title="Test" onClick={() => {}} />);
    expect(getByText('Test')).toBeTruthy();
  });

  it('calls onClick when pressed', () => {
    const mockFn = jest.fn();
    const {getByTestId} = render(<Button title="Click" onClick={mockFn} />);
    fireEvent.press(getByTestId('add-button'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
