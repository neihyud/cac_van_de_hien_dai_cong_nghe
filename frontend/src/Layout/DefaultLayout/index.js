import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { DataProvider } from '../../context/DataContext'

function DefaultLayout({ children }) {
    return (
        <DataProvider>
            <div className="container">
                <Header />
                <div className="content">{children}</div>
                <Footer />
            </div>
        </DataProvider>
    );
}

export default DefaultLayout;
