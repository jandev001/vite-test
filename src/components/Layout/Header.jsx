import React from 'react'

function Header({ setShowSidebar, showSidebar }) {

    const handleClick = () => setShowSidebar((pre) => !pre)

    return (
        <header className='absolute h-16 bg-blue-500 w-full flex items-center px-4'>
            <button className='border border-white px-4 py-2 text-white' onClick={handleClick}>{showSidebar ? 'Close Navigation' : 'Open Naviation'}</button>
        </header>
    )
}

export default Header