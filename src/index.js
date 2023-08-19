import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from './components/loaders/PageLoader';
import store from './app/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path='/*' element={
              <React.Suspense fallback = {<PageLoader />}>
                <App />
              </React.Suspense>
            } />
          </Routes>
      </BrowserRouter>    
    </Provider>
);
