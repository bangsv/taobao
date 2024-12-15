import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MainBanner from '../components/MainBanner';
import DealsSection from '../components/DealsSection';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';
import '../styles/home-styles.css';

function HomePage() {
    return (
        <>
            <Header />
            <NavBar />
            <MainBanner />
            <DealsSection />
            <ProductsSection />
            <Footer />
        </>
    );
}

export default HomePage;