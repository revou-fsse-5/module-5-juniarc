import React from "react";
import { Dropdown } from "flowbite-react";
import { HiLogout } from 'react-icons/hi';
import { useAppDispatch } from "../../../states/hooks";
import { signout } from "../../../states/auth/action";
import DropdownHeaderUser from "./DropdownHeaderUser";
import { UserType } from "../../../types/type";

interface DropdownUserType {
    user: UserType
}

function DropdownUser({ user } : DropdownUserType) {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(signout())
    }

    return (
        <Dropdown label={user.name}>
            <Dropdown.Header>
                <DropdownHeaderUser user={user} />
            </Dropdown.Header>
            <Dropdown.Item onClick={handleLogout} icon={HiLogout} className="flex justify-between text-xl">Log Out</Dropdown.Item>
        </Dropdown>
    )
}

export default DropdownUser;