import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { SettingsProvider } from '../Components/Context/Settings';

describe('App Component Tests', () => {
  test('renders the app with header and footer', () => {
    render(
      <SettingsProvider>
        <App />
      </SettingsProvider>
    );

    expect(screen.getByText('To Do Application')).toBeInTheDocument();
    expect(screen.getByText('&copy; 2024 Code Fellows')).toBeInTheDocument();
  });
});