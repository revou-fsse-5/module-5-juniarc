import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAppSelector } from '../../states/hooks';
import Loader from '../loader/Loader';

export interface RegisterFormValues {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface RegisterFormType {
	handleSubmit: (values: RegisterFormValues) => void;
}

function RegisterForm({ handleSubmit }: RegisterFormType) {
	const isLoading = useAppSelector((state) => state.isLoading);
	
	const initialValues: RegisterFormValues = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.email('Invalid email address')
			.required('Email is required'),
		password: Yup.string()
			.min(8, 'Password must be at least 8 characters long')
			.matches(/[A-Z]/, 'Must contain at least one uppercase letter')
			.matches(/[a-z]/, 'Must contain at least one lowercase letter')
			.matches(/\d/, 'Must contain at least one number')
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password')], 'Password must match')
			.required('Confirm Password is required'),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values: RegisterFormValues) => {
				handleSubmit(values);
			}}
		>
			{({ errors, touched }) => (
				<Form className="w-full h-fit flex flex-col gap-4 items-center">
					<div className="flex flex-col relative w-full">
						<label htmlFor="name" className="font-bold mb-2">
							Name
						</label>
						<Field
							name="name"
							type="text"
							placeholder="Please enter your name"
							className="bg-transparent rounded-md border-solid border border-black p-3 text-sm mb-2"
						/>
						{touched.email && errors.email && (
							<p className="text-red-500">
								<ErrorMessage name="name" />
							</p>
						)}
					</div>
					<div className="flex flex-col relative w-full">
						<label htmlFor="email" className="font-bold mb-2">
							Email
						</label>
						<Field
							name="email"
							type="text"
							placeholder="Please enter your email"
							className="bg-transparent rounded-md border-solid border border-black p-3 text-sm mb-2"
						/>
						{touched.email && errors.email && (
							<p className="text-red-500">
								<ErrorMessage name="email" />
							</p>
						)}
					</div>
					<div className="flex flex-col relative w-full">
						<label htmlFor="password" className="font-bold mb-2">
							Password
						</label>
						<Field
							name="password"
							type="password"
							placeholder="Please enter your password"
							className="bg-transparent rounded-md border-solid border border-black p-3 text-sm mb-2"
						/>
						{touched.email && errors.email && (
							<p className="text-red-500">
								<ErrorMessage name="password" />
							</p>
						)}
					</div>
					<div className="flex flex-col relative w-full">
						<label htmlFor="confirmPassword" className="font-bold mb-2">
							Confirm Password
						</label>
						<Field
							name="confirmPassword"
							type="password"
							placeholder="Please enter your confirm password"
							className="bg-transparent rounded-md border-solid border border-black p-3 text-sm mb-2"
						/>
						{touched.email && errors.email && (
							<p className="text-red-500">
								<ErrorMessage name="confirmPassword" />
							</p>
						)}
					</div>
					<div className='w-full flex items-center justify-start gap-5'>
						<button
							type="submit"
							className={"text-white text-center flex justify-center font-bold py-4 px-10 w-36 h-14 rounded-md bg-green-light hover:bg-green-dark transition-all " + (isLoading && "bg-gray-400")}
							disabled={isLoading}
						>
							{
								isLoading ? (<Loader height='h-6' width='w-6'/>) : "Sign Up"
							}
						</button>
                        <p>
							Have an account ? <Link to="/sign-in" className='text-green-light underline font-bold'>Sign in</Link>
						</p>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default RegisterForm;
