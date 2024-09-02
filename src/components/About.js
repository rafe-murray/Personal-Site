import Resume from './Resume';
import profilePicture from '../assets/rafe-murray.jpg';
import Button from './Button';
import {h1,p} from '../styles';

export default function About() {
    return (
        <div id="About">
            <div className="max-w-7xl flex flex-col sm:flex-row items-center mx-auto place-content-center p-4 pt-20 min-h-screen">
                <div className="sm:w-2/3 sm:pr-6">
                    <h1 className={h1}>Hi, I'm Rafe</h1>
                    <p className={p + " text-lg"}>I am an aspiring backend software developer and current computer engineering student at the University of British Columbia who has received outstanding marks and work evaluations. I am interested in machine learning, algorithms, and solving complex analytical problems.</p>
                    <div className="items-center flex py-8">
                        <Resume />
                        <Button target="_blank" title='See my projects on Github' href='https://github.com/rafe-murray' icon ='fa-brands fa-github' />
                        <Button target="_blank" title='View my profile on Linkedin' href='https://www.linkedin.com/in/rafe-murray' icon='fa-brands fa-linkedin' />
                        <Button title='Email me' href='mailto:rafemurr@gmail.com' icon='fa-regular fa-envelope' />
                    </div>
                </div>
                <img src={profilePicture} className="sm:max-w-[33.33333%] rounded-lg"/>
            </div>
        </div>
    );
}