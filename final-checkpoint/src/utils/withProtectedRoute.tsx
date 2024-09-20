import React, { useEffect} from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/states/hooks";
import { UserType } from "@/types/type";

type ProtectedRouteProps = {
    user: UserType
}

export function withProtectedRoute<T extends ProtectedRouteProps>(WrappedComponent: React.ComponentType<T>) {
    return function (props: Omit<T, keyof ProtectedRouteProps>) {
        const user = useAppSelector((states) => states.user);
        const router = useRouter();

        useEffect(() => {
            if(Object.keys(user).length > 0) {
                router.push('/');
            }
        }, [user, router])

        return <WrappedComponent {...(props as T)}/>;
    }
}

