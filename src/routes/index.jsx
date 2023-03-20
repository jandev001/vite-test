import { Suspense } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'

import Layout from '../components/Layout'
import { lazyImport } from '../utils/lazyImport'

const { Home } = lazyImport(() => import('../pages/Home'), 'Home')
const { Posts } = lazyImport(() => import('../pages/Posts'), 'Posts')
const { Post } = lazyImport(() => import('../pages/Post'), 'Post')

const App = () => {
    return (
        <Layout>
            <Suspense fallback={
                <div className="h-full w-full flex items-center justify-center">
                    ...
                </div>
            }>
                <Outlet />
            </Suspense>
        </Layout>
    )
}

export const AppRoutes = () => {
    const commonRoutes = [
        {
            path: '/',
            element: <App />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/posts', element: <Posts /> },
                { path: '/posts/:id', element: <Post /> }
            ]
        }
    ]

    const element = useRoutes([...commonRoutes])

    return <>{element}</>
}