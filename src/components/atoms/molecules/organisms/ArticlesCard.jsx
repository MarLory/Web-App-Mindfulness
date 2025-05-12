import { Link } from "react-router-dom"

export default function ArticlesCard({ link, title, src, alt }) {

    return (

        <>
            <Link to={link}>
                <article className="flex justify-center relative mb-18">
                    <div className="relative w-[370px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div> {/**overlay sull'immagine per rendere visibile il testo bianco */}
                        <h3 className="text-3xl text-white text-shadow absolute z-[5] pt-4 top-1">{title}</h3> {/**lo z-index è più basso rispetto a quel del footer per evitare, durante lo scroll, che sia visibile in trasparenza */}
                        <img className="w-[370px] rounded-2xl shadow-xl object-cover" src={src} alt={alt}></img>
                    </div>
                </article>
            </Link>
        </>
    )
}