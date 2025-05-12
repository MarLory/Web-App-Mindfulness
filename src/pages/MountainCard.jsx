import HeaderCards from "../components/atoms/molecules/organisms/HeaderCards"
import AudioPlayer from "../components/atoms/molecules/organisms/AudioPlayer"

export default function MountainCard() {

    return (

        <>
            <HeaderCards>Pratica della montagna</HeaderCards>

            <div className="h-48 w-48 mx-auto rounded-full shadow-2xl flex justify-center items-center animate-gradient">
                <img className="w-24" src="../src/assets/media/donna-med.png" alt="donna in posizione meditativa"></img>
            </div>

            <AudioPlayer
                src="/audio/Montagna.mp3"
            ></AudioPlayer>
        </>
    )
}