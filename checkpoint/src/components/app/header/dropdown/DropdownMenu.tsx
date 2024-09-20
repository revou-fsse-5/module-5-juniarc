import React from 'react';
import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { CategoryType } from '../../../../types/type';

interface DropdownMenuType {
    categories: CategoryType[]
}

function DropdownMenu({ categories } : DropdownMenuType) {    
    return(
        <Dropdown label='Category' inline>
            {
                categories?.map((category) => (
                    <Dropdown.Item as={Link} to={'/products/category/' + category.id}>{category.name}</Dropdown.Item>
                ))
            }
        </Dropdown>
    )
}

export default DropdownMenu