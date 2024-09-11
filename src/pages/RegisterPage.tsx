import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterType } from '../types/type';
import { useAppDispatch } from '../states/hooks';
import { register } from '../states/user/action';
import RegisterForm, {
	RegisterFormValues,
} from '../components/auth/RegisterForm';

function RegisterPage() {
	const DEFAULT_AVATAR_URL = 'https://i.imgur.com/yhW6Yw1.jpg'
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (values: RegisterFormValues) => {
		const registerBody: RegisterType = {
			name: values.name,
			email: values.email,
			password: values.password,
			avatar: DEFAULT_AVATAR_URL
		}
		console.log(registerBody)

		const isSuccess = await dispatch(register(registerBody));

		if(isSuccess) {
			navigate('/sign-in');
		}
		
	};
	return (
		<main className="min-h-screen-with-header-footer w-full px-10 flex justify-center">
			<section className="register-section h-fit bg-white rounded-2xl p-10 w-3/5">
				<h2 className="font-black w-full text-center text-5xl mb-5">
					Create Account
				</h2>
				<RegisterForm handleSubmit={handleSubmit} />
			</section>
		</main>
	);
}

export default RegisterPage;
