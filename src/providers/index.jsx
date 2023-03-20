import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'

const AppProvider = ({ children }) => {
  return (
    <RecoilRoot>
      <Router>{children}</Router>
    </RecoilRoot>
  )
}

export default AppProvider