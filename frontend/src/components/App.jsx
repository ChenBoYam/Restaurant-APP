import React from "react";
// import TopBar from "./TopBar";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
// import Specials from "./Specials";
import Events from "./Events";
import Gallery from "./Gallery";
import Contact from "./Contact";
// import Footer from "./Footer";

function App() {
    return (
        <div>
            {/* <TopBar /> */}
            <Header />
            <Hero />
            <main id="main">
                <Events />
                <About />
                <Menu />
                {/* <Specials /> */}
                <Gallery />
                <Contact />

            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default App;