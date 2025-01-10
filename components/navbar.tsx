import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="navbar flex justify-between items-center px-8 py-2"> 
            <div className="logo">
                <h1 className="text-2xl font-bold">COMET<br></br> CURRENCY</h1>
            </div>
            {/* <div className="nav-links">
                <ul className="flex gap-4">
                    <li><Link href={"/login"}><Button>Login</Button></Link></li>
                    <li><Link href={"/login"}><Button>Sign-Up</Button></Link></li>
                </ul>
            </div> */}
        </nav>
    )

}