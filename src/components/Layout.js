import React from 'react';
import Cart from './Cart';
import Header from './Header';
import ProductList from './ProductList';

const Layout = () => {
    return (
        <div className="bg-gray-50 h-full md:h-screen">
            <Header />

            <div className="grid grid-cols-12 gap-6">
                <ProductList />
                <Cart />
            </div>
        </div>
    );
};

export default Layout;