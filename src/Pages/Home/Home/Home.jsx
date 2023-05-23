import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedToy from '../FeaturedToy/FeaturedToy';
import Category from '../../../Category/Category';

const Home = () => {
    return (
        <div className='mx-auto'>
            <Banner></Banner>
            <FeaturedToy></FeaturedToy>
            <Category></Category>
        </div>
    );
};

export default Home;