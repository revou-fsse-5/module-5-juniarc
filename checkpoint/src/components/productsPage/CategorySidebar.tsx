import React from "react";
import { Sidebar } from "flowbite-react";
import { CategoryType } from "../../types/type";

interface CategorySidebarType {
    categories: CategoryType[];
}

function CategorySidebar({ categories } : CategorySidebarType) {
    return(
        <Sidebar aria-label="Category sidebar" className="w-full">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/products" className="font-bold">All Products</Sidebar.Item>
                    <Sidebar.Collapse label="Category" className="font-bold">
                        {
                            categories?.map((category, index) => (
                                <Sidebar.Item key={index} href={"/products/category/" + category.id} className="font-bold">{category.name}</Sidebar.Item>
                            ))
                        }
                    </Sidebar.Collapse>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default CategorySidebar;