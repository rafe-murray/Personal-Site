import { courses } from "../constants";
import { card } from "../styles";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Courses(){
    const content = courses.map( object =>
        <div className={card}>
            <h3 className="text-3xl font-semibold text-zinc-800 dark:text-gray-50 pb-8">{object.year}</h3>
            {object.courses.map(course =>
                <div className="pb-10">
                    <div className="flex flex-col sm:flex-row justify-between text-xl font-semibold text-zinc-800 dark:text-gray-50">
                        <h4 className="pb-2">{course.title}</h4>
                        <h4 className="pb-2">{course.mark}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-50">{course.description}</p>
                </div>
            )}   
        </div>
    );
    return (
        <>
        <div className="max-w-7xl items-top mx-auto place-content-center px-4 pt-24">
            <Link to="/" className="py-4 pr-6 pl-2 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-md text-zinc-800 dark:text-gray-50">
                    <FontAwesomeIcon icon="chevron-left" /><span>  Return to main site</span>
            </Link>
        </div>
        <Section header="Courses" content={content} />
        </>
    );
}