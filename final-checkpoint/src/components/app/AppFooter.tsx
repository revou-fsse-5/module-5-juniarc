import React from "react";
import Link from "next/link";
import { CategoryType } from "../../types/type";

interface AppFooterType {
  categories: CategoryType[];
}

function AppFooter({ categories }: AppFooterType) {
	const usedCategories = categories.slice(0,4)
  return (
    <footer className="bg-black w-full h-44 p-10 flex justify-between mt-10">
      <div>
        <h3 className="font-black text-white text-4xl mb-5">Urban.</h3>
        <nav>
          <ul className="flex gap-5">
            {usedCategories?.map((category) => (
              <li key={category.id}>
                <Link
                  href={"/products/category/" + category.id}
                  className="text-white"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <h4 className="font-bold text-white mb-5">Contact Us</h4>
        <p className="text-white">+62 000 000 000</p>
      </div>
    </footer>
  );
}

export default AppFooter;
