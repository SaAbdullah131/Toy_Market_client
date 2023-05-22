import React from 'react';
import banner1 from '../../../assets/Banner/taddyBear_Banner.jpg'
import {Link} from 'react-router-dom';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mt-3 mb-4">
            <div id="banner1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex justify-end transform  left-10 right-5 bottom-0">
                    <a href="#banner4" className="btn btn-circle mr-4">❮</a>
                    <a href="#banner2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full  left-0 top-0  bg-gradient-to-r from-black to-[rgba(25,0,25,0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl'>Unleash The FuN !! <br /> Animal Toys for Every Adventure!</h2>
                        <p> Unleash your imagination and let these incredible companions ignite your sense of wonder and discovery. <br />So, are you ready to unleash</p>
                        <div>
                            <Link to='/alltoy'>
                                <button className='btn btn-primary mr-3'>All Toy</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner2" className="carousel-item relative w-full">
                <img src='https://img.freepik.com/free-vector/kids-toys-plush-animals-car-ship-shelves_107791-10744.jpg?w=740&t=st=1684791027~exp=1684791627~hmac=570985706cc31be6aea9dcef6834824ff4e139241b72319a21802666270c6e8c' className="w-full" />
                <div className="absolute flex justify-end transform  right-5 bottom-0">
                    <a href="#banner1" className="btn btn-circle mr-4">❮</a>
                    <a href="#banner3" className="btn btn-circle">❯</a>
                </div>
             <div className="absolute flex items-center  h-full  left-0 top-0  bg-gradient-to-r from-black to-[rgba(25,0,25,0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl'>Unleash The FuN !! <br /> Animal Toys for Every Adventure!</h2>
                        <p> Unleash your imagination and let these incredible companions ignite your sense of wonder and discovery. <br />So, are you ready to unleash</p>
                        <div>
                            <Link to='/alltoy'>
                                <button className='btn btn-primary mr-3'>All Toy</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner3" className="carousel-item relative w-full">
                <img src='https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686916.jpg?w=740&t=st=1684790973~exp=1684791573~hmac=71f7605e93f3bb2a3e2f9fbf606567dfd9f3b973cd91a410c2883f6f052c2869' className="w-full" />
                <div className="absolute flex justify-end  transform  right-5 bottom-0">
                    <a href="#banner2" className="btn btn-circle mr-4">❮</a>
                    <a href="#banner4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full  left-0 top-0  bg-gradient-to-r from-black to-[rgba(25,0,25,0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl'>Unleash The FuN !! <br /> Animal Toys for Every Adventure!</h2>
                        <p> Unleash your imagination and let these incredible companions ignite your sense of wonder and discovery. <br />So, are you ready to unleash</p>
                        <div>
                            <Link to='/alltoy'>
                                <button className='btn btn-primary mr-3'>All Toy</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner4" className="carousel-item relative w-full">
                <img src='https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?w=740&t=st=1684790886~exp=1684791486~hmac=87cfd26b1ef924d637b536a57000c7f57c0a1a278a958488ee48930be01d2646' className="w-full" />
                <div className="absolute rounded-lg flex justify-end transform   right-5 bottom-0">
                    <a href="#banner3" className="btn btn-circle mr-4">❮</a>
                    <a href="#banner1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full  left-0 top-0  bg-gradient-to-r from-black to-[rgba(25,0,25,0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl'>Unleash The FuN !! <br /> Animal Toys for Every Adventure!</h2>
                        <p> Unleash your imagination and let these incredible companions ignite your sense of wonder and discovery. <br />So, are you ready to unleash</p>
                        <div>
                            <Link to='/alltoy'>
                                <button className='btn btn-primary mr-3'>All Toy</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Banner;