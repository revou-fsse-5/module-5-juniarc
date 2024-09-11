import React, { useEffect } from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeListContainer1 from '../components/home/HomeListContainer1';
import HomeListContainer2 from '../components/home/HomeListContainer2';
import HomeCategoryContainer from '../components/home/category/HomeCategoryContainer';
import { useAppDispatch, useAppSelector } from '../states/hooks';
import {
	asyncRecieveProductsByCategory1ForHome,
	asyncRecieveProductsByCategory2ForHome,
} from '../states/productsForHome/action';
import { Link } from 'react-router-dom';
import { CategoryType } from '../types/type';

interface HomePageType {
  categories: CategoryType[]
}

function HomePage({ categories } : HomePageType) {
	const productsByCategoryForHome = useAppSelector(
		(states) => states.productsByCategoryForHome
	);
	const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncRecieveProductsByCategory1ForHome())
    dispatch(asyncRecieveProductsByCategory2ForHome())
  },[dispatch])

	return (
		<main className="min-h-svh px-10">
			<HomeHero />
			<HomeListContainer1 products={productsByCategoryForHome.category1} categories={categories}/>
			<HomeListContainer2 products={productsByCategoryForHome.category2} categories={categories}/>
			<div className="w-full flex justify-center mt-10 mb-10 bg-gray-200 p-3 hover:bg-black hover:text-white transition-colors rounded-lg">
				<Link
					to="/"
					className="w-full h-full text-center font-bold  transition-colors"
				>
					See All Products
				</Link>
			</div>
			<HomeCategoryContainer />
		</main>
	);
}

export default HomePage;
