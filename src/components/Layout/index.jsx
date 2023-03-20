import React, { useState } from 'react'

import Header from './Header'
import Navigation from './Navigation'
import Main from './Main'

function Layout({ children }) {

    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <div className="overflow-hidden">
            <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
            <section className="flex items-start justify-center overflow-y-hidden">
                <Navigation showSidebar={showSidebar} />
                <Main showSidebar={showSidebar}>{children}</Main>
            </section>
        </div >
    )
}

export default Layout