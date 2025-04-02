import React from 'react';
import { Banner } from './component/Banner';
import SalesStatistics from './component/SalesStats.tsx';
import Services from './component/Services';
import GlobalImpact from './component/GlobalImpact';
import AboutUs from './component/AboutUs';
import TalentHiringSection from './component/TalentHiringSection';
import StepsSection from './component/StepsSection';
import ValueProposition from './component/ValueProposition';
import YoungTalent from './component/YoungTalent';
import Footer from '@/components/Footer';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner />
            <SalesStatistics />
            <Services />
            <GlobalImpact />
            <AboutUs />
            <TalentHiringSection />
            <StepsSection />
            <ValueProposition />
            <YoungTalent />
            <Footer />
        </div>
    );
};

export default Home;