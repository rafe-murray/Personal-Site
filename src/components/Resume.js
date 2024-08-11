import resume from '../assets/Rafe_Murray_Resume.pdf';

export default function Resume(){
    return (
        <a href={resume} title="View my resume" className="bg-zinc-800 text-white p-3 rounded-md font-bold text-lg hover:scale-105">My Resume</a>
    );
}