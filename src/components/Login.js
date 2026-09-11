import React, { useState } from 'react';

function Login() {

          const [toggleSignInForm, setToggleSignInForm] = useState(true);

        const toggleSignInform = () => {
            setToggleSignInForm(!toggleSignInForm);
        }

	return (
		<main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
			<form className="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow-md">
				<h1 className="text-2xl font-bold text-gray-900">Login</h1>

				<div>
					<label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
						Email
					</label>
					<input
						className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
						id="email"
						name="email"
						required
						type="email"
					/>
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
						Password
					</label>
					<input
						className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
						id="password"
						name="password"
						required
						type="password"
					/>
				</div>
                {!toggleSignInForm && (
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                            type="password"
                        />
                    </div>
                )}

				<button
					className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
					type="submit"
				>
					Log in
				</button>

                {toggleSignInForm ? (
                    <p className="text-center text-sm text-gray-600">
					New to Netflix?{' '}
					<button
						type="button"
						onClick={toggleSignInform}
						className="font-medium text-blue-600 hover:underline"
					>
						Sign up now
					</button>
				</p>
                ) : (
                    <p className="text-center text-sm text-gray-600">
					Already a Netflix user?{' '}
					<button
						type="button"
						onClick={toggleSignInform}
						className="font-medium text-blue-600 hover:underline"
					>
						Sign in now
					</button>
				</p>
                )}

			</form>
		</main>
	);
}

export default Login;