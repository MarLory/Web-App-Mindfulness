import { Link } from "react-router-dom"

export default function Button({ to, children, className = "" }) {

    return (

        <>
            <Link
                to={to}
                className={`mt-7 mb-20 text-3xl font-bold p-5 px-7 mx-auto rounded-xl shadow-2xl ${className}` }>{children}
            </Link>
        

        </>
    )
}
