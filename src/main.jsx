import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import CarDetail from './components/CarDetail.jsx'
import Layout from './components/Layout.jsx'
import FAQ from './components/FAQ.jsx'
import About from './components/About.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { carsData } from './data/cars.js'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cars/:carId",
        element: <CarDetail />,
        loader: ({ params }) => {
          const car = carsData[params.carId];
          if (!car) {
            throw new Error('Car not found');
          }
          return car;
        },
      },
      {
        path: "/faqs",
        element: <FAQ />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
vite:import-analysis