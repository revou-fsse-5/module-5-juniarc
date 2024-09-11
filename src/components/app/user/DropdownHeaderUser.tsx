import React from "react";
import { UserType } from "../../../types/type";

interface DropdownHeaderUserType {
    user: UserType
}

function DropdownHeaderUser({ user }: DropdownHeaderUserType) {
    return(
        <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full">
                <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover object-center rounded-full"/>
            </div>
            <div>
                <p className="text-2xl font-bold">{user.name}</p>
                <p className="text-lg">{user.email}</p>
            </div>
        </div>
    )
}

export default DropdownHeaderUser;