import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedToy from '../FeaturedToy/FeaturedToy';
import Category from '../../../Category/Category';
import TopFeature from '../../TopFeature/TopFeature';
import CoutdownSec from '../../CoutdownSec/CoutdownSec';

const Home = () => {
    return (
        <div className='mx-auto'>
            <Banner></Banner>
            <TopFeature></TopFeature>
            <FeaturedToy></FeaturedToy>
            <Category></Category>
            <CoutdownSec></CoutdownSec>
        </div>
    );
};

export default Home;