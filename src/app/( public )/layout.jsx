import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MainLayout ({ children }) {
    return (
        <section>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </section>
    )
}