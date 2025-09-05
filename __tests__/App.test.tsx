import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

// Mock the store and persistor
jest.mock('../src/store', () => ({
  store: {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
    subscribe: jest.fn(),
  },
  persistor: {
    persist: jest.fn(),
    flush: jest.fn(),
    pause: jest.fn(),
    purge: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  },
}));

describe('App', () => {
  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it('renders the app component', () => {
    const { getByTestId } = render(<App />);
    // The app should render without throwing any errors
    expect(() => render(<App />)).not.toThrow();
  });
});