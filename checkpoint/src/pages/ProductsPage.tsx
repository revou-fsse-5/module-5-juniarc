import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../states/hooks';
import { useParams } from 'react-router-dom';
import {
	getAllProducts,
	getAllProductsByCategory,
} from '../states/products/action';
import { getCategory } from '../states/category/action';
import ProductList from '../components/product/ProductList';
import CategorySidebar from '../components/productsPage/CategorySidebar';
import { CategoryType } from '../types/type';

interface ProductsPageType {
	categories: CategoryType[];
}

function ProductsPage({ categories } : ProductsPageType) {
	const products = useAppSelector((state) => state.products);
    const category = useAppSelector((state) => state.category);

	const dispatch = useAppDispatch();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			dispatch(getAllProductsByCategory(id));
            dispatch(getCategory(id));
		} else {
			dispatch(getAllProducts());
		}
	}, [id, dispatch]);

	return (
		<section className='flex px-10 gap-7 justify-between w-full'>
			<div className='w-1/3 h-fit'>
                <CategorySidebar categories={categories}/>
            </div>
			<section className='min-h-screen w-full'>
				<h1 className='font-bold text-5xl mb-5' data-testid='headingProductsPage'>{id ? category.name : "All Products"}</h1>
                <ProductList products={products}/>
			</section>
		</section>
	);
}

export default ProductsPage;
