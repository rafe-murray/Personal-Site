import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add( fab, faEnvelope);

export default function App(){
    return(
        <>
            <Navbar />
            <About />
            <Skills />
            <Work />
            <Education />
            <Projects />
            <Footer />
        </>
    );
}