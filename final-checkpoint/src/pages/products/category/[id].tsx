import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getAllCategory } from "@/states/allCategory/action";
import {
  getAllProducts,
  getAllProductsByCategory,
} from "@/states/products/action";
import { getCategory } from "@/states/category/action";
import ProductList from "@/components/product/ProductList";
import { CategoryType, ProductItemType } from "@/types/type";
import { GetServerSideProps } from "next";
import store from "@/states";
import dynamic from "next/dynamic";

const CategorySidebar = dynamic(
  () => import("@/components/productsPage/CategorySidebar"),
  { ssr: false }
);

interface ProductsPageType {
  categories: CategoryType[];
  products: ProductItemType[];
  category: CategoryType;
}

function index({ categories, products, category }: ProductsPageType) {
  return (
    <section className="flex px-10 gap-7 justify-between w-full">
      <div className="w-1/3 h-fit">
        <CategorySidebar categories={categories} />
      </div>
      <section className="min-h-screen w-full">
        <h1
          className="font-bold text-5xl mb-5"
          data-testid="headingProductsPage"
        >
          {category.name}
        </h1>
        <ProductList products={products} />
      </section>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  await store.dispatch(getAllCategory());
  await store.dispatch(getAllProductsByCategory(id as string));
  await store.dispatch(getCategory(id as string));

  const state = store.getState();
  const products = state.products;
  const category = state.category;
  const categories = state.categories;

  return {
    props: {
      products,
      category,
      categories,
    },
  };
};

export default index;
