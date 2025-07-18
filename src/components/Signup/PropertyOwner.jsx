import React from 'react'

export default function PropertyOwner() {
    return (
        <div className='mt-4'>
            <div className='flex gap-4'>

                <div className='w-full'>
                    <label class="block font-medium mb-3">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id=""
                        class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                        placeholder="e.g., Felix"
                    />
                </div>

                <div className='w-full'>
                    <label class="block font-medium mb-3">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id=""
                        class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                        placeholder="e.g., Kofi"
                    />
                </div>
            </div>

            <label class="block mt-2  font-medium mb-2">Email</label>
            <input
                type="email"
                name="email"
                id=""
                class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                placeholder="e.g., kwame232@gmail.com"
            />

            <label class="block mt-2 font-medium mb-2">Phone no</label>
            <input
                type="tel"
                name="phone"
                id=""
                class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                placeholder="e.g., +233 24 123 4567"
            />

            <label class="block mt-2  font-medium mb-2">Password</label>
            <input
                type="password"
                name="password"
                id=""
                class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                placeholder="**********"
            />

            <label class="block mt-2  font-medium mb-3">Confirm Password</label>
            <input
                type="password"
                name="confirmPassword"
                id=""
                class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                placeholder="**********"
            />
        </div>
    )
}

