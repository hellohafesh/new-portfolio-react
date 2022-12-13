import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shered/Footer/Footer';
import Nav from '../Pages/Shered/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;