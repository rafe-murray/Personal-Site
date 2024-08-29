import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Education from "../components/Education";

import darkmode from "../darkmode";

export default function Home(){
    return(
        <>
            <script async={true} src={darkmode}/>
            <About />
            <Skills />
            <Work />
            <Education />
            <Projects />
        </>
    );
}