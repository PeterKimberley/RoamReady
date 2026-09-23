import Link from "next/link" ; // Next.js link

export default function Navbar() { //
return (
    <nav>
        <Link href="/">RoamReady</Link>
        <div>
            <Link href="/login">Log In</Link>
            <Link href="signup">SignUp</Link>
            
            </div>
            </nav>
); 
//this is just bare bones until we get colors/spacing chosen
// no tailwind yet , no className anywhere
}
