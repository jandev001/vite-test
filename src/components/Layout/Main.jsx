import React from 'react'

function Main({ children, showSidebar }) {
    return (
        <div className={`pt-16 text-center bg-red-500 flex flex-1 h-screen overflow-hidden ease-in-out duration-300 ${showSidebar ? "pl-[22vw]" : "pl-[2vw]"}`}>
            <div className="my-5 flex text-start">
                {children}
            </div>
        </div>
    )   
}

export default Main