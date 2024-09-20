import { SigninType, RegisterType } from "../types/type";

const api = (() => {
	const BASE_URL = 'https://api.escuelajs.co/api/v1';

	async function getAllProducts() {
		const respone = await fetch(`${BASE_URL}/products?limit=12&offset=0`);
		const products = await respone.json();

		if (!respone.ok) {
			throw new Error('Something is Error. Try again');
		}

		return products;
	}

	async function getAllProductsByCategoryForHome(id?: number) {
		const respone = await fetch(
			`${BASE_URL}/categories/${id}/products?limit=4&offset=0`
		);
		const products = await respone.json();

		if (!respone.ok) {
			throw new Error('Something is Error. Try again');
		}

		return products;
	}

	async function getAllProductsByCategory(id?: string | string[]) {
		const respone = await fetch(`${BASE_URL}/categories/${id}/products?limit=12&offset=0`);
		const products = await respone.json();

		if (!respone.ok) {
			throw new Error('Something is Error. Try again');
		}

		return products;
	}

	async function getProductDetail(id: string | string[]) {
		const respone = await fetch(`${BASE_URL}/products/${id}`);
		const product = await respone.json();

		if (!respone.ok) {
			throw new Error('Something is Error. Try again');
		}

		return product;
	}

	async function getAllCategory() {
		const respone = await fetch(`${BASE_URL}/categories`);
		const responeJson = await respone.json();

		if(!respone.ok) {
			throw new Error('Something is Error. Try again');
		}

		return responeJson;
	}

	async function getCategory(id?:string | string[]) {
		const respone = await fetch(`${BASE_URL}/categories/${id}`);
		const category = await respone.json();

		if (!respone.ok) {
			throw new Error('Something is Error. Try again');
		}
		return category;
	}

	async function register({ name, email, password, avatar } : RegisterType) {
		const response = await fetch(`${BASE_URL}/users`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				password,
				avatar
			})
		});
		const responeJson = await response.json();

		if(!response.ok) {
			throw new Error(responeJson.messages);
		}

		return responeJson;
	}

	async function signin({ email, password }:SigninType) {
		const response = await fetch(`${BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		})

		const responeJson = await response.json();

		if(!response.ok) {
			throw new Error(responeJson.message)
		}

		return responeJson;
	}

	async function getUserWithSession() {
		const accessToken = localStorage.getItem('accessToken');
		const respone = await fetch(`${BASE_URL}/auth/profile`, {
			method: 'GET',
			headers: {
				"Authorization": `Bearer ${accessToken}`
			}
		})

		const responeJson = await respone.json();

		if(!respone.ok) {
			throw new Error(responeJson.message);
		}

		return responeJson;
	}

	return {
		getAllProducts,
		getAllProductsByCategoryForHome,
		getAllProductsByCategory,
		getProductDetail,
		getAllCategory,
		getCategory,
		register,
		signin,
		getUserWithSession
	};
})();

export default api;
