import React from 'react';
import Hero from "./sections/Hero.jsx";
import Navbar from "./sections/Navbar.jsx";

const App = () => {
    return (
        <main className="max-w-9xl mx-auto">
            <Navbar />
            <Hero />
        </main>
    )
}
export default App