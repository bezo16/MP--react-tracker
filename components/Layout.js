import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";
import Head from "next/head";

const Layout = ({children}) => {
    return ( 
        <section className="layout">
            <TheHeader />
            {children}
            <TheFooter />

            <Head>
                <title>Bezo16 exs tracker</title>
            </Head>
        </section>
     );
}
 
export default Layout;

