import React from 'react';
import CategoryList from './CategoryList';
function HomeCategoryContainer() {
	return (
		<section>
			<h2 className="font-extrabold text-5xl w-full text-center mb-10">
				Shop By Category
			</h2>
			<CategoryList />
		</section>
	);
}

export default HomeCategoryContainer;
