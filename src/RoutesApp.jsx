import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Casa from './Casa'
import { EmailTemplate } from './EmailTemplate'

export const RoutesApp = () => {
  return (
    <Routes>
        <Route path="" element={<Casa/>}></Route>
        <Route path="p" element={<EmailTemplate/>}></Route>
    </Routes>
  )
}
