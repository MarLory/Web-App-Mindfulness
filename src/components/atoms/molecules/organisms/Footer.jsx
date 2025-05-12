import IconMoonSun from "/src/components/atoms/IconMoonSun";
import { Link } from "react-router-dom";


export default function Footer() {

    return (

        <>
            <footer className="fixed bottom-0 w-full bg-[#6A9BB7] text-white flex justify-between items-center px-6 py-4 shadow-md z-[10] border-t [1] border-t-[#5C7080] footer "> {/** ho inserito lo z-index per evitare che il testo delle immagini, durante lo scroll, appaia sul footer */}

                <Link to="/" className="text-2xl">
                    <i className="fa-solid fa-house"></i>
                </Link>

                <button className="text-2xl">
                    <IconMoonSun
                    className="fa-moon text-white text-2xl "
                    ></IconMoonSun>
                </button>
            </footer>
        </>
    )
}



