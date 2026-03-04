// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SmartAxis title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SmartAxis/i);
    expect(titleElement).toBeInTheDocument();
});
