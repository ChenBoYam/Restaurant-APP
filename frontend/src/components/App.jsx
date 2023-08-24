import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Events from "./Events";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
    return (

        <div>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_LOGIN_ID}>
                <React.StrictMode>
                    <Header />
                    <Hero />
                    <main id="main">
                        <Events />
                        <About />
                        <Menu />
                        <Gallery />
                        <Contact />
                    </main>
                </React.StrictMode>
            </GoogleOAuthProvider>
        </div>
    );
};

export default App;