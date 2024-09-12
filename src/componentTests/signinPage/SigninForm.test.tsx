import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../states';
import SigninForm from '../../components/auth/SigninForm';

describe('RegisterForm Component', () => {
	const handleSubmit = jest.fn();

	test('renders form fields and handles submit', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SigninForm handleSubmit={handleSubmit} />
				</BrowserRouter>
			</Provider>
		);

		// check are components rendered
		expect(screen.getByLabelText('Email')).toBeInTheDocument();
		expect(screen.getByLabelText('Password')).toBeInTheDocument();

		// Fill out the form
		userEvent.type(
			screen.getByPlaceholderText(/Please enter your email/i),
			'john.doe@example.com'
		);
		userEvent.type(
			screen.getByPlaceholderText(/Please enter your password/i),
			'Password123!'
		);

		// Submit the form
		userEvent.click(screen.getByText(/Sign In/i));

		// action
		await waitFor(() => {
			expect(handleSubmit).toHaveBeenCalledWith({
				email: 'john.doe@example.com',
				password: 'Password123!',
			});
		});
	});
	
	test('displays validation errors when fields are empty', async () => {
		// arrange
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SigninForm handleSubmit={handleSubmit} />
				</BrowserRouter>
			</Provider>
		);

		// action
		userEvent.click(screen.getByText(/Sign In/i));

		// assert
		expect(await screen.findByText('Email is required')).toBeInTheDocument();
		expect(
			await screen.findByText('Password is required')
		).toBeInTheDocument();
	});
});
