import React from 'react';
import { Dropdown } from 'flowbite-react';
import Link from 'next/link';
import { CategoryType } from '../../../../types/type';

interface DropdownMenuType {
    categories: CategoryType[]
}

function DropdownMenu({ categories } : DropdownMenuType) {    
    return(
        <Dropdown label='Category' inline>
            {
                categories?.map((category) => (
                    <Dropdown.Item as={Link} href={'/products/category/' + category.id}>{category.name}</Dropdown.Item>
                ))
            }
        </Dropdown>
    )
}

export default DropdownMenu