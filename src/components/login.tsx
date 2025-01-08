"use client"
import { useState } from 'react';

export default function LogIn() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (event:any) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        console.log("Login attempted with username:", username, "and password:", password);
        closeModal(); 
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Login
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-80 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-xl font-bold text-gray-500"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl mb-4 font-semibold">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <br />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <br />
                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}