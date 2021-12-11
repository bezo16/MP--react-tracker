import Link from "next/link";

const TheHeader = () => {
    return ( 
        <header>
            <span>Bezo-train</span>
            <Link href="/">homepage</Link>
            <Link href="/train">train</Link>
        </header>
     );
}
 
export default TheHeader;