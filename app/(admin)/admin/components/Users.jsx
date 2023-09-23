"use client"
// pages/users.js
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../libs/getUser';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
        <div className="flex m-5 justify-between">
            <h1>Customer</h1>
        </div>
      <h1 className=""></h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>


        <table className="w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Social</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modify</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">0001</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ShortenURL</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john.doe@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">017272781</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Facebook</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100$</td>
              <td>
                <button className="rounded border px-3 py-2 text-white  bg-green-600"> add </button>
                <button className="rounded border px-3 py-2 text-white  bg-red-600"> delete </button>
              </td>
            </tr>
            <tr className="bg-gray-50">
        
            </tr>
          </tbody>
        </table>


    </div>
  );
}