import React from 'react';
import { useAppSelector } from '../../states/hooks';
import { ProductItemType } from '../../types/type';
import ProductItem from './ProductItem';
import Loader from '../loader/Loader';

interface ProductListType {
	products: ProductItemType[];
}

function ProductList({ products }: ProductListType) {
	const isLoading = useAppSelector((state) => state.isLoading);

	return isLoading ? (
		<div className="w-full h-full flex justify-center items-center">
			<Loader width="w-14" height="h-14" />
		</div>
	) : products.length === 0 ? (
		<p className="w-full text-center align-middle mt-10">
			There are no products avaible
		</p>
	) : (
		<div className="grid grid-cols-3 gap-5 min-w-full">
			{products.map((product) => (
				<ProductItem key={product.id} {...product} />
			))}
		</div>
	);
}

export default ProductList;
