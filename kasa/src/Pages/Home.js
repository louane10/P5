import React from 'react';
import './Home.scss'
import Header from '../Components/Header';
import Barre from '../Components/Barre';
import CardList from '../Components/CardList';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div className='body'>
            <Header />
            <Barre />
            <CardList />
            <Footer />
        </div>
    );
};

export default Home;