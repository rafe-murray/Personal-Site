import resume from './Rafe_Murray_Resume.pdf';
import github from './assets/github.svg';
// import githubwhite from './assets/github-white.svg';
import linkedin from './assets/linkedin.svg';
import mail from './assets/mail-142.svg';
import profilePicture from './assets/rafe-murray.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Resume(){
    return (
        <a href={resume} title="View my resume" class="bg-black text-white p-3 rounded-lg font-bold text-lg">My Resume</a>
    );
}

function Link({title, href, icon}){
    return(
        <a href={href} title={title} class="inline-block p-2">
            <FontAwesomeIcon icon={icon} className='h-[3rem]'/>
        </a>
    );
}

export default function About() {
    return (
        <div id="About">
            <div class="max-w-screen-lg flex flex-row items-top mx-auto place-content-center">
                <div class="w-2/3">
                    <h1 class="font-bold text-8xl p-4">Hi, I'm Rafe</h1>
                    <p class="p-4">I'm a computer engineering student looking to solve problems involving etcetera ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi. </p>
                    <div class="p-4 items-center">
                        <Resume />
                        <Link title='See my projects on Github' href='https://github.com/rafe-murray' icon ='fa-brands fa-github' />
                        <Link title='View my profile on Linkedin' href='https://www.linkedin.com/in/rafe-murray' icon='fa-brands fa-linkedin' />
                        <Link title='Email me' href='mailto:rafemurr@gmail.com' icon='fa-regular fa-envelope' />
                    </div>
                </div>
                <img src={profilePicture} class="w-1/3 p-4 rounded-[2rem]"/>
            </div>
        </div>
    );
}