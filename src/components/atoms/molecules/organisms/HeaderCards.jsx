import BackButton from "../../BackButton"
import Title from "../../Title"

export default function HeaderCards ({children}) {

    return (

        <>
        <header className="mb-20 ">
                <BackButton />

                <div className="text-center mt-10">
                    <Title>{children}</Title>
                </div>
            </header>
        </>
    )
}



