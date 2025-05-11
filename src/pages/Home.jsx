import React from 'react';
import Hero from '../components/Hero';
import Lawyers from '../components/lawyers/Lawyers';
import Service from '../components/Service';
import { useLoaderData } from 'react-router';

const Home = () => {
    const lawyersData=useLoaderData()
    return (
        <div>
           <Hero/>
           <Lawyers lawyersData={lawyersData}/>
           <Service/>

        </div>
    );
};

export default Home;