import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartProvider';
import Navbar from './Navbar';
import Footer from './Footer';

function Cart({ cartItems }) {
    // Calculate the total bill
    const totalBill = cartItems.reduce((total, item) => total + (typeof item.price === 'number' ? item.price : 0), 0);


    const {clearCart} = useCart();

    const [isOrderPlaced, setOrderPlaced] = useState(false);

    function handlePayNow() {
        // Handle the "Pay Now" button click event here.
        // For simplicity, this example just displays an alert.
        // You can replace this with actual payment processing code.
        alert('Items purchased! Your cart is now empty.');
        setOrderPlaced(true);
        clearCart();
        
    }

    return (
        <>
        <Navbar/>
        <div className="bg-gray-900 text-gray-100 px-10 py-44 ">
            <h2 className="text-2xl font-bold text-center text-orange-500">Cart</h2>
            <div className="grid gap-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-2">
                        <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                            <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.category}</p>
                                <p className="text-sm text-gray-500">${item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-right">
                <span className="text-lg font-semibold">Total Bill: Rs {totalBill.toFixed(2)}</span>
            </div>
            <div className='text-center m-4'>
                {!isOrderPlaced ? (
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full mt-2" onClick={handlePayNow}>
                        Pay Now
                    </button>
                ) : (
                    <div>
                        <p>Your order has been placed.</p>
                        <Link to="/">
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-full mt-2">
                                Order Now
                            </button>
                        </Link>
                    </div>
                )}
                {cartItems.length === 0 && <p className="text-center">No items in the cart.</p>}
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Cart;
