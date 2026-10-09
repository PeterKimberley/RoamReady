import Link from "next/link" ; // Next.js link


export default function Navbar() { //
return (
    <nav className="navbar">
        <Link href="/" className="nav-logo"><span>Roam</span>Ready</Link>
        <div className="nav-links">
            <Link href="/features">Features</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Log In</Link>
            <Link href="signup">SignUp</Link>
        </div>
                
     
    </nav>
); 
//this is just bare bones until we get colors/spacing chosen
// no tailwind yet , no className anywhere
}
