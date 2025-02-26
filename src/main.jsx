import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import App2 from './App2.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './route/Router.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)


// 기존 방식
// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//     // <App />
//     <App2 />
//   // </StrictMode>,
// )
