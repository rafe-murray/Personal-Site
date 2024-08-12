import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    function handleClick(){
        setMenuOpen(!menuOpen);
    }
    const items = [
        "Skills",
        "Work Experience",
        "Education",
        "Projects",
    ];
    const navbarItems = items.map(item =>
        <li className="p-4">
            <a href={"#"+item} className="hover:opacity-85">{item}</a>
        </li>
    );
    const mobileNavItems = items.map(item =>
        <li className="p-2 m-2 hover:bg-gray-100 rounded-md">
            <a className="inline-block w-full" href={"#"+item} onClick={handleClick}>{item}</a>
        </li>
    );
    return(
        <nav className="fixed w-full bg-white border-gray-200 border text-lg font-semibold sm:px-8 px-3 shadow-sm">
            <a href="/" className="float-left p-4 text-zinc-900">Rafe Murray</a>
            <ul className="text-zinc-700 hidden sm:flex flex-row float-end">
                {navbarItems}
            </ul>
            {/* Mobile menu */}
            <a className="cursor-pointer float-end text-zinc-700 sm:hidden block p-4" onClick={handleClick}>
                <FontAwesomeIcon icon="fa-bars" />
            </a>
            <ul className={(menuOpen ? "block " : "hidden ") + "fixed top-14 right-4 bg-white shadow-sm border border-gray-300 rounded-lg"}>
                {mobileNavItems}
            </ul>
        </nav>
    );
}