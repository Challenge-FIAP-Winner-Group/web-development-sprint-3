import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Error404 from './routes/Error404.jsx';
import About from './routes/About.jsx';
import Solution from './routes/Solution.jsx';
import Contact from './routes/Contact.jsx';
import { StyleSheetManager } from 'styled-components';

const router = createBrowserRouter([
  { path: "/", element: <App/>, errorElement: <Error404/>, children: [
    { path:"/", element:<Home/>},
    { path:"/about", element:<About/>},
    { path:"/solution", element:<Solution/>},
    { path:"/contact", element:<Contact/>},
  ]}
]);


// Define a function to filter unknown props
const shouldForwardProp = (prop) =>
  prop === 'css' || prop.startsWith('$'); // Example filtering for props starting with "$"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleSheetManager>
      <RouterProvider router={router}/>
    </StyleSheetManager>
  </React.StrictMode>,
);