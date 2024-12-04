
import React from 'react';
import Navbar from '../Components/Navbar';
import '../Css/index.css';
import Header from '../Components/Header';
import ContentBoxes from '../Components/ContentBoxes';
import Live from '../Components/Live';
import Footer from '../Components/Footer';

function Index() {

    return (
        <div className='main'>
            <Navbar />
            <Header />
            <ContentBoxes />
            <Live />
            <Footer />
        </div>
    );
}

export default Index;
