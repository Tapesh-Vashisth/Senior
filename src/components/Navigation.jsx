import React from 'react'
import PageLoader from './loaders/PageLoader';
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
const Error404 = React.lazy(() => import("../pages/Error404")) 
const Posts = React.lazy(() => import("../pages/Posts")) 
const Bookmarked = React.lazy(() => import("../pages/Bookmarked")) 
const Home = React.lazy(() => import("../pages/Home")) 



function Navigation() {
  return (
    <>
        <ToastContainer style={{ fontSize: "20px" }} />
        <Routes>
            <Route path='/loader' element = {<PageLoader />} />

            <Route path="/">
                <Route 
                    path="" 
                    element={
                        <React.Suspense fallback={<PageLoader />}>
                            <Home />
                        </React.Suspense>
                    } 
                />

                <Route 
                    path="/board/:boardId"
                    element={
                    <React.Suspense fallback={<PageLoader />}>
                        <Posts />
                    </React.Suspense>
                } />

                <Route path="/board/:boardId/Bookmarked" element={
                    <React.Suspense fallback={<PageLoader />}>
                        <Bookmarked />
                        {/* <Posts mode="bookmarked" /> */}
                    </React.Suspense>
                } />
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