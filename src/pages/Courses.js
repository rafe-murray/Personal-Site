import { courses } from "../constants";
import { card } from "../styles";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { p } from "../styles";


export default function Courses(){
    const courseCards = courses.map( object =>
        <div className={card}>
            <h3 className="text-3xl font-semibold text-zinc-800 dark:text-gray-50 pb-8">{object.year}</h3>
            <table className="w-full">
                <tbody>
                {object.courses.map(course =>
                    <tr className="border-b-2">
                        <td className={p + " w-[15%] py-2 font-mono"}>{course.code}</td>
                        <td className={p + " py-2"}>{course.title}</td>
                        <td className={p + " w-[15%] py-2"}>{course.mark}</td>
                    </tr>
                )}
                </tbody> 
            </table>
        </div>
    );
    const content = <div className="grid grid-cols-2 gap-x-5">
        {courseCards}
    </div>
    return (
        <>
        <div className="max-w-7xl items-top mx-auto place-content-center px-4 pt-24">
            <Link to={-1} className="py-4 pr-6 pl-2 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-md text-zinc-800 dark:text-gray-50">
                    <FontAwesomeIcon icon="chevron-left" /><span>  Return to main site</span>
            </Link>
        </div>
        <Section header="Courses" content={content} />
        </>
    );
}