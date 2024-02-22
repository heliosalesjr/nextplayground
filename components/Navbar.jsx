'use client'
import Link from "next/link";
import ScrollIndicator from "./scroll-indicator";

const links = [
    { href: "/client", label: "client"},
    { href: "/drinks", label: "drinks"},
    { href: "/tasks", label: "tasks"},
    { href: "/query", label: "query"}
];

function Navbar() {
  return (
    <>
        <nav className="bg-slate-300 py-4">
            <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
                <Link href="/" className="btn ">
                    Hélio's Playground
                </Link>
            
                <ul className="menu menu-horizontal md:ml-8 text-purple-900 font-semibold">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="capitalize">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <ScrollIndicator />
        </nav>

        
    </>
  )
}

export default Navbar