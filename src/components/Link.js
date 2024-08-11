import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Link({title, href, icon}){
    return(
        <a href={href} title={title} className="inline-block p-2">
            <FontAwesomeIcon icon={icon} className='h-[3rem] text-zinc-800 hover:scale-105'/>
        </a>
    );
}