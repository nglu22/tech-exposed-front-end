import React from 'react';
import OurService from './OurService';
import LandingPage from './LandingPage';
import OurWork from './OurWork';
import Comments from './Comments';
const Home = () => {
    return (
        <>
            <LandingPage/>
            <OurService/>
            <OurWork/>
            <Comments/>
        </>
    )
}

export default Home;
