import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import PageLoader from './loaders/PageLoader';
import Posts from '../pages/Posts';
import Bookmarked from '../pages/Bookmarked';
const Error404 = React.lazy(() => import("./Errors/Error404")) 


function Navigation() {
  return (
    <>
        <ToastContainer style={{ fontSize: "20px" }} />
        <Routes>
            <Route path='/loader' element = {<PageLoader />} />

            <Route path="/">
                {/* <Route 
                    path="" 
                    element={
                        <React.Suspense fallback={<PageLoader />}>
                            <Home />
                        </React.Suspense>
                    } 
                />
                <Route path="/board/:boardId" element={<Posts />} />
                <Route path="/board/:boardId/Bookmarked" element={<Bookmarked />} /> */}
            </Route>

            <Route
                path="*"
                element={
                    <React.Suspense fallback={<PageLoader />}>
                        <Error404 />
                    </React.Suspense>
                }
            />
        </Routes>
    </>
  )
}

export default Navigation