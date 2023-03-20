import React from 'react'

import { AppRoutes } from './routes'
import AppProvider from './providers'

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
