import React from 'react';
import { useAppSelector } from '../../../states/hooks';
import CategoryItem from './CategoryItem';

function CategoryList() {
	const categories = useAppSelector((state) => state.categories);

	return (
		<div>
			<div className="flex gap-5">
				<CategoryItem
					name={categories[0]?.name}
					image={categories[0]?.image}
					link={'/products/category/' + categories[0]?.id}
				/>
				<CategoryItem
					name={categories[1]?.name}
					image={categories[1]?.image}
					link={'/products/category/' + categories[1]?.id}
				/>
				<CategoryItem
					name={categories[2]?.name}
					image={categories[2]?.image}
					link={'/products/category/' + categories[2]?.id}
				/>
			</div>
			<div className="flex w-full justify-center mt-5 gap-5">
				<CategoryItem
					name={categories[3]?.name}
					image={categories[3]?.image}
					link={'/products/category/' + categories[3]?.id}
				/>
				<CategoryItem
					name={categories[4]?.name}
					image={categories[4]?.image}
					link={'/products/category/' + categories[4]?.id}
				/>
			</div>
		</div>
	);
}

export default CategoryList;
