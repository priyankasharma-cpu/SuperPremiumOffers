import React from "react";

import Hero from "../components/Hero";
import OffersSection from "../components/OffersSection";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import CTA from "../components/CTA";

const Home = () => {
    return (
        <main>
            {/* Main Hero */}
            <Hero />

            {/* Available Offers */}
            <OffersSection />

            {/* Why Choose Super Premium Offers */}
            <WhyChooseUs />

            {/* How The Website Works */}
            <HowItWorks />

            {/* About Super Premium Offers */}
            <About />

            {/* Final Conversion CTA */}
            <CTA />
        </main>
    );
};

export default Home;