import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import '@testing-library/jest-dom/extend-expect'; 

test('renders contact form', () => {
  render(<ContactForm />);
  const nameLabel = screen.getByLabelText(/nombre/i);
  const emailLabel = screen.getByLabelText(/email/i);
  const messageLabel = screen.getByLabelText(/mensaje/i);
  const submitButton = screen.getByRole('button', { name: /enviar/i });

  expect(nameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(messageLabel).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('allows the user to fill out the form and displays success message', () => {
  render(<ContactForm />);
  
  const nameInput = screen.getByLabelText(/nombre/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/mensaje/i);
  const submitButton = screen.getByRole('button', { name: /enviar/i });

  fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
  fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Este es un mensaje de prueba.' } });

  fireEvent.click(submitButton);

  const successMessage = screen.getByText(/mensaje enviado con éxito/i);
  expect(successMessage).toBeInTheDocument();
});

test('displays an error message if form is submitted with empty fields', () => {
  render(<ContactForm />);
  
  const submitButton = screen.getByRole('button', { name: /enviar/i });

  fireEvent.click(submitButton);

  const errorMessage = screen.getByText(/por favor, completa todos los campos/i);
  expect(errorMessage).toBeInTheDocument();
});