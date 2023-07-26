import './index.css';
import './App.css';
import App from './App';

import React from 'react';
import { createRoot } from 'react-dom/client';
// react router dom imports 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/store'; 
import { fetchUsers } from 'features/users/userSlice';



// import './assets/css/normalize.css'; 



const container = document.getElementById('root');
const root = createRoot(container);


// start the mock server in dev-mode
if (process.env.NODE_ENV === 'development') {
  console.log("starting Server")
  const {worker} = require('./api/server');
  worker.start({onUnhandledRequest: 'bypass'});
  store.dispatch(fetchUsers());
}


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

    // <BrowserRouter>
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // </BrowserRouter>