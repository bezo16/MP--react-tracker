import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

const Layout = ({children}) => {
    return ( 
        <section className="layout">
            <TheHeader />
            {children}
            <TheFooter />
        </section>
     );
}
 
export default Layout;

