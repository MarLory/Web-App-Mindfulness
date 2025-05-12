import AudioPlayer from "../components/atoms/molecules/organisms/AudioPlayer";
import HeaderCards from "../components/atoms/molecules/organisms/HeaderCards";



export default function BreathCard() {

  return (

    <>
      <HeaderCards>Pratica sul respiro</HeaderCards>

      <div className="h-48 w-48 mx-auto rounded-full shadow-2xl flex justify-center items-center animate-gradient">
        <img className="w-24" src="../src/assets/media/donna-med.png" alt="donna in posizione meditativa"></img>
      </div>

      {/** lettore audio */}
      
     <AudioPlayer
     src="/audio/Respiro.mp3"
     ></AudioPlayer>

     
    </>
  )
}

