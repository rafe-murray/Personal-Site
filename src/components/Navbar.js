import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitcher from "./ThemeSwitcher";
import shadows from "@mui/material/styles/shadows";

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
            <a href={"#"+item} className="hover:text-cyan-500">{item}</a>
        </li>
    );
    const mobileNavItems = items.map(item =>
        <li className="p-2 m-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-md">
            <a className="inline-block w-full" href={"#"+item} onClick={handleClick}>{item}</a>
        </li>
    );
    return(
        <nav className="fixed w-full bg-white dark:bg-black border-gray-200 dark:border-dark-800 border-b text-lg font-semibold md:px-8 px-3 shadow-sm">
            <a href="/" className="float-left p-4 text-zinc-900 dark:text-gray-50">Rafe Murray</a>
            
            <ul className="text-zinc-700 dark:text-gray-50 hidden md:flex flex-row float-end">
                {navbarItems}
            </ul>
            {/* Mobile menu */}
            <a className="cursor-pointer float-end text-zinc-700 dark:text-gray-50 md:hidden block p-4" onClick={handleClick}>
                <FontAwesomeIcon icon="fa-bars" />
            </a>
            <ThemeSwitcher />
            <ul className={(menuOpen ? "block " : "hidden ") + "fixed top-14 right-4 text-zinc-700 dark:text-gray-50 bg-white dark:bg-dark-800 shadow-sm border border-gray-300 dark:border-zinc-700 rounded-lg"}>
                {mobileNavItems}
            </ul>
        </nav>
    );
}