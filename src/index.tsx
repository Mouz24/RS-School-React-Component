import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Movies from './Movies'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound'
import AboutUs from './AboutUs'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route path="/" element={<Movies />}/>
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path='*' element={<NotFound />} />
      </>
  )
)

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
