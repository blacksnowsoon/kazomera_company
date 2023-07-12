import './index.css';
import './App.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
// react router dom imports 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
// pathes imports
import Home from './_main/home/Home';
import ArticlesInvestments from './components/articles_investments/article_invest'
// import './assets/css/normalize.css'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        element: <ArticlesInvestments />,
        path: '/investment',
      }
    ]
  }
])

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

    // <BrowserRouter>
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // </BrowserRouter>