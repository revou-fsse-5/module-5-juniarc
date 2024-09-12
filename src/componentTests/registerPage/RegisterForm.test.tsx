import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../states';
import RegisterForm from '../../components/auth/RegisterForm';
import Loader from '../../components/loader/Loader';

describe('RegisterForm Component', () => {
	const handleSubmit = jest.fn();

	test('renders form fields and handles submit', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<RegisterForm handleSubmit={handleSubmit} />
				</BrowserRouter>
			</Provider>
		);

		// check are components rendered
		expect(screen.getByLabelText('Name')).toBeInTheDocument();
		expect(screen.getByLabelText('Email')).toBeInTheDocument();
		expect(screen.getByLabelText('Password')).toBeInTheDocument();
		expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();

		// Fill out the form
		userEvent.type(
			screen.getByPlaceholderText(/Please enter your name/i),
			'John Doe'
		);
		userEvent.type(
			screen.getByPlaceholderText(/Please enter your email/i),
			'john.doe@example.com'
		);
		userEvent.type(
			screen.getByPlaceholderText(/Please enter your password/i),
			'Password123!'
		);
		userEvent.type(
			screen.getByPlaceholderText(/Please enter your confirm password/i),
			'Password123!'
		);

		// Submit the form
		userEvent.click(screen.getByText(/Sign Up/i));

		// action
		await waitFor(() => {
			expect(handleSubmit).toHaveBeenCalledWith({
				name: 'John Doe',
				email: 'john.doe@example.com',
				password: 'Password123!',
				confirmPassword: 'Password123!',
			});
		});
	});

	test('displays validation errors when fields are empty', async () => {
		// arrange
		render(
			<Provider store={store}>
				<BrowserRouter>
					<RegisterForm handleSubmit={handleSubmit} />
				</BrowserRouter>
			</Provider>
		);

		// action
		userEvent.click(screen.getByText(/Sign Up/i));

		// assert
		expect(await screen.findByText('Name is required')).toBeInTheDocument();
		expect(await screen.findByText('Email is required')).toBeInTheDocument();
		expect(
			await screen.findByText('Password is required')
		).toBeInTheDocument();
		expect(
			await screen.findByText('Confirm Password is required')
		).toBeInTheDocument();
	});
});
