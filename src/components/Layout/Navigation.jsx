import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const Navigation = ({ showSidebar }) => {

    const navigation = [
        { name: 'Home', to: '.' },
        { name: 'Posts', to: './posts' }
    ]

    return (
        <>
            <div className={`fixed top-16 left-0 w-[20vw] bg-yellow-500 p-10 text-black-600 h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "-translate-x-full"}`} >
                {navigation.map((item, index) => (
                    <NavLink
                        end={index === 0}
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) => clsx(
                            isActive ? 'bg-gray-900 text-white' : 'text-gray-700',
                            'hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </>
    );
}

export default Navigation