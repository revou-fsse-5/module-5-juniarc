import Link from "next/link";
import HomeHero from "@/components/home/HomeHero";
import HomeListContainer1 from "@/components/home/HomeListContainer1";
import HomeListContainer2 from "@/components/home/HomeListContainer2";
import HomeCategoryContainer from "@/components/home/category/HomeCategoryContainer";
import { useAppDispatch, useAppSelector } from "@/states/hooks";
import {
  asyncRecieveProductsByCategory1ForHome,
  asyncRecieveProductsByCategory2ForHome,
} from "@/states/productsForHome/action";
import { CategoryType, ProductItemType } from "@/types/type";
import { GetServerSideProps } from "next";
import store from "@/states";
import { getAllCategory } from "@/states/allCategory/action";

interface HomePageType {
  categories: CategoryType[];
  productsByCategoryForHome: {
    category1: ProductItemType[];
    category2: ProductItemType[];  
  };
}

export default function Home({ categories, productsByCategoryForHome }: HomePageType) {
  return (
    <div className="min-h-svh px-10">
      <HomeHero />
      <HomeListContainer1
        products={productsByCategoryForHome.category1}
        categories={categories}
      />
      <HomeListContainer2
        products={productsByCategoryForHome.category2}
        categories={categories}
      />
      <div className="w-full flex justify-center mt-10 mb-10 bg-gray-200 p-3 hover:bg-black hover:text-white transition-colors rounded-lg">
        <Link
          href="/products"
          className="w-full h-full text-center font-bold  transition-colors"
        >
          See All Products
        </Link>
      </div>
      <HomeCategoryContainer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await store.dispatch(getAllCategory());
  await store.dispatch(asyncRecieveProductsByCategory1ForHome())
  await store.dispatch(asyncRecieveProductsByCategory2ForHome())

  const state = store.getState();
  const categories = state.categories;
  const productsByCategoryForHome = state.productsByCategoryForHome;
  
  return {
    props: { categories, productsByCategoryForHome }
  };
};
