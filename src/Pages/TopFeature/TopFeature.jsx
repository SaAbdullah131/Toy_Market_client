import React from 'react';
import { FcDebian,FcMoneyTransfer,FcCustomerSupport } from "react-icons/fc";

const TopFeature = () => {
    return (
        <div className='flex p-7 gap-4 justify-between items-center shadow-indigo-50 shadow-xl rounded-2xl border-s-4 border-e-4 border-indigo-500' data-aos='fade-in'>
            <div className='flex justify-center items-center'>
                <FcDebian className='h-1/2 w-full'></FcDebian>
                <div>
                    <h4 className='text-lg font-bold'>FREE RETURN</h4>
                    <p className='text-semibold text-md'>30 Days money Back Guarantee !</p>
                </div>
            </div>
            <div>
                <div className='flex justify-center items-center gap-3'>
                    <FcMoneyTransfer className='h-3/4 w-1/2' ></FcMoneyTransfer>
                    <div>
                        <h4 className='text-lg font-bold'>FREE SHIPPING</h4>
                        <p className='text-semibold text-md'>Free Shipping on all order !</p>
                    </div>
                </div>

            </div>
            <div>
            <div className='flex justify-center items-center gap-3'>
                    <FcCustomerSupport className='h-3/4 w-1/2'></FcCustomerSupport>
                    <div>
                        <h4 className='text-lg font-bold'>SUPPORT 24/7</h4>
                        <p className='text-semibold text-md'>We Support online 24 hours a day.</p>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default TopFeature;