import React, { ReactNode, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../types/type";

interface ProtectedRouteType {
    user: UserType,
}

function withProtectedRoute<T>(WrappedComponent: React.ComponentType<T>) {
    return function (props: T & ProtectedRouteType) {
        const { user } = props;
        const navigate = useNavigate();

        useEffect(() => {
            if(Object.keys(user).length > 0) {
                navigate('/');
            }
        }, [user, navigate])

        return <WrappedComponent {...props}/>;
    }
}

// function ProtectedRoute({ user, children } : ProtectedRouteType) {
//     const navigate = useNavigate();

//     useEffect(() => {
//         if(Object.keys(user).length > 0) {
//             navigate('/');
//         }
//     },[user, navigate])

//     return <>{children}</>;
// }

export default withProtectedRoute;