import "../App.css"
import Footer from "../components/atoms/molecules/organisms/Footer"




export default function MainLayout({ children }) {

    return (

        <>
        <div className="body pb-24">
            {children}
            <Footer />
            </div>
        </>
    )
}




