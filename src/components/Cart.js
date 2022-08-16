import React from 'react';
import CartProduct from './CartProduct';

const Cart = () => {
    return (
        <div
            className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
        >
            <div
                className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                {/* Cart Product */}
                <CartProduct />

                {/* Total Item */}
                <div
                    className="flex justify-center items-center text-center"
                >
                    <div className="text-xl font-semibold">
                        <p>Total Item</p>
                        <p className="text-5xl">0</p>
                    </div>
                </div>
            </div>

            {/* Total Price Component */}
            <div
                className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                <div
                    className="flex justify-center items-center text-center"
                >
                    <div className="text-xl font-semibold">
                        <p>Total Price</p>
                        <p className="text-5xl">0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;