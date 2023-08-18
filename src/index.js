import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from './components/loaders/PageLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
          <Route path='/*' element={
            <React.Suspense fallback = {<PageLoader />}>
              <App />
            </React.Suspense>
          } />
        </Routes>
    </BrowserRouter>
);
