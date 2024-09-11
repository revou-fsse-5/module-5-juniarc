import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { useAppSelector } from '../../states/hooks';
import Loader from '../loader/Loader';

export interface SinginFormValues {
	email: string;
	password: string;
}

interface SigninFormType {
	handleSubmit: (values: SinginFormValues) => void;
}

function SigninForm({ handleSubmit }: SigninFormType) {
	const isLoading = useAppSelector((state) => state.isLoading);
	const initialValues: SinginFormValues = {
		email: '',
		password: '',
	};

	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Email is not valid')
			.required('Email is required'),
		password: Yup.string().required('Password is required'),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values: SinginFormValues) => handleSubmit(values)}
		>
			{({ errors, touched }) => (
				<Form className="w-full h-fit flex flex-col gap-4 items-center">
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
					<div className="w-full flex items-center justify-start gap-5">
						<button
							type="submit"
							className={"text-white text-center flex justify-center font-bold py-4 px-10 w-36 h-14 rounded-md bg-green-light hover:bg-green-dark transition-all " + (isLoading && "bg-gray-400")}
							disabled={isLoading}
						>
							{
								isLoading ? (<Loader height='h-6' width='w-6'/>) : "Sign In"
							}
						</button>
						<p>
							Didn't have an account ?{' '}
							<Link
								to="/sign-up"
								className="text-green-light underline font-bold"
							>
								Sign Up
							</Link>
						</p>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default SigninForm;
