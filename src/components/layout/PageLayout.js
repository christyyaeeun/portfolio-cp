import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'


const PageLayout = () => {
    return (
        <main className="App">
            <NavBar />
            <Outlet />
        </main>


    )
}
export default PageLayout;
