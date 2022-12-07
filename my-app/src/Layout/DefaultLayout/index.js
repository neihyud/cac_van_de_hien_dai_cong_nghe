import React from 'react';
import Footer from './Footer';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div className="container">
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
