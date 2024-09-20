import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/states/hooks";
import { signin } from "@/states/auth/action";
import SigninForm, {SinginFormValues} from "@/components/auth/SigninForm";
import { withProtectedRoute } from "@/utils/withProtectedRoute";

function Index() {
	const dispatch = useAppDispatch();
	const router = useRouter();

    const handleSubmit = async (values: SinginFormValues) => {
		const isSuccess = await dispatch(signin(values))
		if(isSuccess) {
			router.push('/');
		}
	};
	return (
		<main className="min-h-screen-with-header-footer w-full px-10 flex justify-center">
			<section className="register-section h-fit bg-white rounded-2xl p-10 w-3/5">
				<h2 className="font-black w-full text-center text-5xl mb-5">
					Sign In
				</h2>
				<SigninForm handleSubmit={handleSubmit} />
			</section>
		</main>
	);
}

export default withProtectedRoute(Index);