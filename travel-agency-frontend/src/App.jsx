import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes
import ScrollReveal from "scrollreveal";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Oceans from "./components/Oceans";
import Historical from "./components/Historical";

export default function App() {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: false,
        });

        sr.reveal(
            `nav, #hero, #services, #recommend, #testimonials, #packages, #contact, footer`,
            {
                opacity: 0,
                interval: 300,
            }
        );
    }, []);

    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<><Hero /><Services /><Recommend /><Packages /><Testimonials /><Contact /></>} />
                <Route path="/oceans" element={<Oceans />} />
                <Route path="/historical" element={<Historical />} />
            </Routes>
            <Footer />
        </div>
    );
}
