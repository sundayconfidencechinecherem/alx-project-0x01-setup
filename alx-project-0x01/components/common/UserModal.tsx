import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
   id: 1,
    name: "",
    username: "",
    email: "",
    address : {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
        lat: "",
        lng: "",
     },
    },
    phone: "",
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: ""
    }

  });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Handle nested address fields
    if (name === 'street' || name === 'suite' || name === 'city' || name === 'zipcode') {
      setUser(prevUser => ({
        ...prevUser,
        address: { ...prevUser.address, [name]: value }
      }));
    }
    // Handle nested geo fields
    else if (name === 'lat' || name === 'lng') {
      setUser(prevUser => ({
        ...prevUser,
        address: { 
          ...prevUser.address, 
          geo: { ...prevUser.address.geo, [name]: value } 
        }
      }));
    }
    // Handle nested company fields
    else if (name === 'company') {
      setUser(prevUser => ({
        ...prevUser,
        company: { ...prevUser.company, name: value }
      }));
    }
    else if (name === 'catchphrase') {
      setUser(prevUser => ({
        ...prevUser,
        company: { ...prevUser.company, catchPhrase: value }
      }));
    }
    else if (name === 'bs') {
      setUser(prevUser => ({
        ...prevUser,
        company: { ...prevUser.company, bs: value }
      }));
    }
    // Handle top-level fields
    else {
      setUser(prevUser => ({ ...prevUser, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
  <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 font-medium mb-2">User ID</label>
            <input
              type="number"
              id="id"
              name="id"
              value={user.id}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City </label>
            <input
              id="city"
              name="city"
              value={user.address.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  city"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="street" className="block text-gray-700 font-medium mb-2">Street </label>
            <input
              id="street"
              name="street"
              value={user.address.street}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  street"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="suite" className="block text-gray-700 font-medium mb-2">Suite </label>
            <input
              id="suite"
              name="suite"
              value={user.address.suite}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  suite"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">Zipcode </label>
            <input
              id="zipcode"
              name="zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  zipcode"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lat" className="block text-gray-700 font-medium mb-2">Lat </label>
            <input
              id="lat"
              name="lat"
              value={user.address.geo.lat}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  lat"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lng" className="block text-gray-700 font-medium mb-2">Lng </label>
            <input
              id="lng"
              name="lng"
              value={user.address.geo.lng}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  lng"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website </label>
            <input
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  website"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company </label>
            <input
              id="company"
              name="company"
              value={user.company.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  company"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="catchphrase" className="block text-gray-700 font-medium mb-2">CatchPhrase </label>
            <input
              id="catchphrase"
              name="catchphrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  catchphrase"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bs" className="block text-gray-700 font-medium mb-2">Business </label>
            <input
              id="bs"
              name="bs"
              value={user.company.bs}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter  bs"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;