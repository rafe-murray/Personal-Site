export default function Navbar(){
    const items = [
        "Skills",
        "Work Experience",
        "Education",
        "Projects",
    ]
    const navbarItems = items.map(item =>
        <li className="p-4">
            <a href={"#"+item} className="hover:opacity-85">{item}</a>
        </li>
    );
    return(
        <nav className="fixed w-full bg-white border-gray-200 border text-lg font-semibold px-8 shadow-sm">
            <a href="/" className="float-left p-4 text-zinc-900">Rafe Murray</a>
            <ul className="text-zinc-700 flex flex-row float-end">
                {navbarItems}
            </ul>
        </nav>
    );
}