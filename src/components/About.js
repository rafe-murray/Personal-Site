import Resume from './Resume';
import profilePicture from '../assets/rafe-murray.png';
import Link from './Link';

export default function About() {
    return (
        <div id="About" className="p-4">
            <div className="max-w-7xl flex flex-row items-center mx-auto place-content-center m-4 p-6 h-screen">
                <div className="w-2/3 pr-6">
                    <h1 className="font-extrabold text-7xl pb-6 text-zinc-900">Hi, I'm Rafe</h1>
                    <p className="text-lg pt-2 pb-4 text-gray-600">I'm a computer engineering student looking to solve problems involving etcetera ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi. </p>
                    <div className="items-center flex pt-4">
                        <Resume />
                        <Link title='See my projects on Github' href='https://github.com/rafe-murray' icon ='fa-brands fa-github' />
                        <Link title='View my profile on Linkedin' href='https://www.linkedin.com/in/rafe-murray' icon='fa-brands fa-linkedin' />
                        <Link title='Email me' href='mailto:rafemurr@gmail.com' icon='fa-regular fa-envelope' />
                    </div>
                </div>
                <img src={profilePicture} className="max-w-[33.33333%] rounded-[2rem]"/>
            </div>
        </div>
    );
}