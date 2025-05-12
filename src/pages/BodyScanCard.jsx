import HeaderCards from "../components/atoms/molecules/organisms/HeaderCards"
import AudioPlayer from "../components/atoms/molecules/organisms/AudioPlayer"
export default function BodyScanCard() {

    return (

        <>
            <HeaderCards>Body Scan</HeaderCards>

            <div className="h-48 w-48 mx-auto rounded-full shadow-2xl flex justify-center items-center animate-gradient">
                <img className="w-24" src="../src/assets/media/donna-med.png" alt="donna in posizione meditativa"></img>
            </div>

            <AudioPlayer
                src="/audio/BodyScan.mp3"
            ></AudioPlayer>
        </>
    )
}