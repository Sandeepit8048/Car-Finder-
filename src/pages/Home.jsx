
// App.jsx
    import React, { useEffect, useState } from 'react';

    function Home() {
    const [users, setUsers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

       useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(data => setUsers(data?.data || [])) // Fallback to empty array
            .catch(err => {
            console.error('Failed to fetch users:', err);
            setUsers([]); // Safe fallback
            });
        }, []);


    return (
        <div className="min-h-screen bg-gray-100 p-6 relative">
        <h1 className="text-3xl font-bold mb-6">Avatar Cards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.map(user => (
            <div
                key={user.id}
                className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center"
            >
                <img
                src={user.avatar}
                alt={user.first_name}
                className="rounded-full w-24 h-24 mb-4"
                />
                <h2 className="text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</h2>
                <p className="text-gray-500">{user.email}</p>
            </div>
            ))}
        </div>

        {/* Floating Button */}
        <button
            onClick={() => setModalOpen(true)}
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg text-2xl"
        >
            +
        </button>

        {/* Modal */}
        {modalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl w-96">
                <h2 className="text-xl font-bold mb-4">Create New Avatar</h2>
                <form className="space-y-3">
                <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border p-2 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border p-2 rounded-md"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded-md"
                />
                <input
                    type="url"
                    placeholder="Avatar URL"
                    className="w-full border p-2 rounded-md"
                />
                <div className="flex justify-end gap-2 mt-4">
                    <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-gray-200 rounded-md"
                    >
                    Cancel
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md"
                        onClick={() => {
                            const newAvatar = {
                            id: Date.now(),
                            first_name: "New",
                            last_name: "User",
                            email: "newuser@example.com",
                            avatar: "https://i.pravatar.cc/150?img=68",
                            };
                            setUsers(prev => [...prev, newAvatar]);
                            setModalOpen(false);
                        }}
                        >
                            Create
                            </button>

                </div>
                </form>
            </div>
            </div>
        )}
        </div>
    );
    }
    console.log('Avatar Created');
    export default Home;