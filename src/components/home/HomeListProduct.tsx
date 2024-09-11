import React, { useState } from 'react';
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
import ProductItem from '../product/ProductItem';
import { ProductItemType } from '../../types/type';
import ButtonNextList from './ButtonNextList';
import ButtonPrevList from './ButtonPrevList';

interface HomeListProductType {
  products: ProductItemType[];
  slideInterval: number;
}

function HomeListProduct({ products, slideInterval }: HomeListProductType) {
  const pairedProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    pairedProducts.push(products.slice(i, i + 2));
  }
  return (
    <div className="flex items-center gap-4 h-413 w-2/3">
      <div className="p-2 h-full flex items-center gap-7 w-full min-w-96">
        <Carousel
          leftControl={<ButtonPrevList />}
          rightControl={<ButtonNextList />}
          slideInterval={slideInterval}
          className="w-full"
        >
          {pairedProducts.map((pair, index) => (
            <div key={index} className="flex gap-10 h-full py-4 justify-center">
              {pair.map((product: ProductItemType) => (
                <ProductItem key={product.id} {...product} />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeListProduct;
