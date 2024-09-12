import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../states';
import HomeHero from '../../components/home/HomeHero';
import ProductsPage from '../../pages/ProductsPage';
import { CategoryType } from '../../types/type';

// dummy data
const categories = [
	{
		id: 1,
		name: 'NEW NAME',
		image: 'https://i.imgur.com/QkIa5tT.jpeg',
		creationAt: '2024-09-10T23:45:18.000Z',
		updatedAt: '2024-09-11T10:51:00.000Z',
	},
	{
		id: 2,
		name: 'Electronics',
		image: 'https://i.imgur.com/ZANVnHE.jpeg',
		creationAt: '2024-09-10T23:45:18.000Z',
		updatedAt: '2024-09-10T23:45:18.000Z',
	},
];

describe('HomeHero component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test('renders heading and paragraph correctly', () => {
		render(
			<BrowserRouter>
				<HomeHero />
			</BrowserRouter>
		);

		const heading = screen.getByRole('heading', {
			name: 'Where Every Find Is A Treasure',
		});

		const paragraph = screen.getByTestId('heroText');

		expect(heading).toBeInTheDocument();
		expect(paragraph).toHaveTextContent(
			'Experience the thrill of discovering exceptional and unique items'
		);
	});

	test('navigate to /products when Shop Now Button is clicked', async() => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomeHero />} />
						<Route
							path="/products"
							element={<ProductsPage categories={categories} />}
						/>
					</Routes>
				</BrowserRouter>
			</Provider>
		);

		const shopNowButton = screen.getByRole('link', { name: 'Shop Now' });

		userEvent.click(shopNowButton);

		await waitFor(() => {
			const heading = screen.getByTestId('headingProductsPage');
			expect(heading).toBeInTheDocument();
		});
	});
});
