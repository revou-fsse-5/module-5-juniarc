import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './states/hooks';
import withProtectedRoute from './components/protectedRoute/ProtectedRoute';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ProductsPage from './pages/ProductsPage';
import ChartPage from './pages/ChartPage';
import RegisterPage from './pages/RegisterPage';
import SinginPage from './pages/SigninPage';
import AppHeader from './components/app/AppHeader';
import AppFooter from './components/app/AppFooter';
import { getChartFromStorage } from './states/chart/action';
import { getUserWithSession } from './states/user/action';
import { getAllCategory } from './states/allCategory/action';

function App() {
	const user = useAppSelector((state) => state.user);
	const accessToken = useAppSelector((state) => state.accessToken);
	const categories = useAppSelector((state) => state.categories);
	const dispatch = useAppDispatch();

	const ProtectedRegisterPage = withProtectedRoute(RegisterPage);
	const ProtectedSignInPage = withProtectedRoute(SinginPage);

	useEffect(() => {
		dispatch(getAllCategory());
		dispatch(getChartFromStorage());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getUserWithSession());
	}, [dispatch, accessToken]);

	return (
		<div className="min-h-svh">
			<AppHeader user={user} categories={categories} />
			<Routes>
				<Route path="/" element={<HomePage categories={categories} />} />
				<Route path="/products/:id" element={<DetailPage />} />
				<Route
					path="/products"
					element={<ProductsPage categories={categories} />}
				/>
				<Route
					path="/products/category/:id"
					element={<ProductsPage categories={categories} />}
				/>
				<Route path="/shopping-chart" element={<ChartPage />} />
				<Route
					path="/sign-up"
					element={<ProtectedRegisterPage user={user} />}
				/>
				<Route path="/sign-in" element={<ProtectedSignInPage user={user} />} />
			</Routes>
			<AppFooter categories={categories} />
		</div>
	);
}

export default App;
