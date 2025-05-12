import { useRef, useState } from "react";
import { Play, Pause, RotateCcw, RotateCw } from "lucide-react";

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null); // riferimento all'elemento audio
  const [isPlaying, setIsPlaying] = useState(false); // stato: sta suonando?

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause(); 
    } else {
      audioRef.current.play(); 
    }
    setIsPlaying(!isPlaying); // cambia stato
  };

  const rewind = () => {
    if (audioRef.current) audioRef.current.currentTime -= 10; // indietro di 10 sec
  };

  const forward = () => {
    if (audioRef.current) audioRef.current.currentTime += 10; // avanti di 10 sec
  };

  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      <audio ref={audioRef} src={src} preload="auto" />
      <div className="flex items-center gap-6 bg-white/60 px-6 py-4 rounded-full shadow-lg backdrop-blur-sm">
        <button onClick={rewind}>
          <RotateCcw className="w-6 h-6 text-indigo-500" />
        </button>
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <button onClick={forward}>
          <RotateCw className="w-6 h-6 text-indigo-500" />
        </button>
      </div>
    </div>
  );
}
