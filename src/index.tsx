
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import router, { loaderUser } from './routes/root';
import LayoutUser from './layout/LayoutUser';
import LayoutAdmin from './layout/LayoutAdmin';
import routerAdmin from './routes/routerTest';
const root = createRoot(document.getElementById('root'))

const test = router.map(res =>{
  console.log(res);
  return {
    ...res,
    element: res.element,
  }
})
root.render(
  <RouterProvider router={createBrowserRouter([
    {
      path: '/',
      element: <LayoutUser />,
      children:[
        ...test
      ],
      loader: async (props) =>{
        return loaderUser(props)
    }
    },
    {
      path: '/admin',
      element: <LayoutAdmin />,
      children:[
        ...routerAdmin
      ],
      loader: async (props) =>{
        return "loader Admin"
      }
    }
  ])} />
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
