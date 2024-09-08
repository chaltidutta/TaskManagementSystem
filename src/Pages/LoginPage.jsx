import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        try {
            // API call for login (replace with your actual API URL)
            const response = await fetch(`${import.meta.env.VITE_LOGIN_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Send email and password
            });

            if (response.ok) {
                const data = await response.json();
                // Handle success (e.g., navigate to another page or store authentication token)
                console.log('Login successful', data);
            } else {
                // Handle failure (e.g., show an error message)
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        // Main container with minimum height set to 70% of the viewport height and centering the content
        <div className="min-h-[70dvh] grid place-items-center">
            {/* Form container with max width, padding, rounded corners, background color, and shadow */}
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 shadow-lg">
                {/* Heading for the login form */}
                <h1 className="text-2xl font-bold text-center">Login</h1>

                {/* Form with fields for email and password */}
                <form noValidate="" onSubmit={handleLogin} className="space-y-6">
                    {/* Email input field */}
                    <div className="space-y-1 text-sm">
                        <label
                            htmlFor="UserEmail"
                            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <span className="text-xs font-medium text-gray-700">Email</span>

                            <input
                                type="email"
                                name="email"
                                id="UserEmail"
                                placeholder="user@example.com"
                                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update state on change
                            />
                        </label>
                    </div>

                    {/* Password input field */}
                    <div className="space-y-1 text-sm">
                        <label
                            htmlFor="UserPassword"
                            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <span className="text-xs font-medium text-gray-700">Password</span>

                            <input
                                type="password"
                                name="password"
                                id="UserPassword"
                                placeholder="Type your password"
                                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update state on change
                            />
                        </label>
                    </div>

                    {/* Submit button */}
                    <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-blue-600">
                        Log In
                    </button>
                </form>

                
            </div>
        </div>
    );
};

export default LoginPage;
