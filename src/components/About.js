import Resume from './Resume';
import profilePicture from '../assets/rafe-murray.png';
import Button from './Button';

export default function About() {
    return (
        <div id="About">
            <div className="max-w-7xl flex flex-col sm:flex-row items-center mx-auto place-content-center p-4 pt-20 min-h-screen">
                <div className="sm:w-2/3 sm:pr-6">
                    <h1 className="font-extrabold text-7xl pb-8 text-zinc-900 dark:text-gray-50">Hi, I'm Rafe</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-50">I'm a computer engineering student looking to solve problems involving etcetera ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit risus ut ex consequat, et aliquet arcu iaculis. Vestibulum eu eros et tellus porttitor ornare. Quisque dictum ex nibh. Suspendisse et elit et ante fringilla iaculis. Etiam posuere tortor risus, sit amet sollicitudin felis commodo vitae. Pellentesque vehicula ultrices dignissim. Nam rhoncus non lectus eget euismod. Maecenas in dapibus nibh, quis aliquet nisi. </p>
                    <div className="items-center flex py-8">
                        <Resume />
                        <Button title='See my projects on Github' href='https://github.com/rafe-murray' icon ='fa-brands fa-github' />
                        <Button title='View my profile on Linkedin' href='https://www.linkedin.com/in/rafe-murray' icon='fa-brands fa-linkedin' />
                        <Button title='Email me' href='mailto:rafemurr@gmail.com' icon='fa-regular fa-envelope' />
                    </div>
                </div>
                <img src={profilePicture} className="sm:max-w-[33.33333%] rounded-lg"/>
            </div>
        </div>
    );
}