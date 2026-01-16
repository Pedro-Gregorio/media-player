import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  Repeat,
  Shuffle,
  Volume2,
} from "lucide-react";

export default function Controls({
  isPlaying,
  setIsPlaying,
  isRandom,
  setIsRandom,
  isLoop,
  setIsLoop,
  handleNext,
  handlePrevious,
}: {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isRandom: boolean;
  setIsRandom: React.Dispatch<React.SetStateAction<boolean>>;
  isLoop: boolean;
  setIsLoop: React.Dispatch<React.SetStateAction<boolean>>;
  handleNext: React.Dispatch<React.SetStateAction<void>>;
  handlePrevious: React.Dispatch<React.SetStateAction<void>>;
  playTime: number;
  setPlayTime: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div className="mt-8 hidden lg:flex items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-8">
          <button onClick={() => setIsRandom(!isRandom)}>
            <Shuffle
              size={25}
              className={`p-1 rounded-full cursor-pointer  hover:bg-orange-100 hover:text-gray-700 transition ease-out duration-300 ${
                isRandom ? "bg-orange-100 text-gray-700" : "text-gray-400"
              }`}
            />
          </button>
          <button onClick={() => setIsLoop(!isLoop)}>
            <Repeat
              size={25}
              className={`p-1 rounded-full cursor-pointer  hover:bg-orange-100 hover:text-gray-700 transition ease-out duration-300 ${
                isLoop ? "bg-orange-100 text-gray-700" : "text-gray-400"
              }`}
            />
          </button>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <button onClick={() => handlePrevious()}>
            <ArrowLeft
              size={25}
              className="p-1 rounded-full cursor-pointer text-gray-400 hover:bg-orange-100 hover:text-gray-700 transition ease-out duration-300"
            />
          </button>
          <button
            className="p-3 rounded-full bg-orange-400 cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {!isPlaying && (
              <Play size={20} className="text-gray-50 fill-gray-50" />
            )}
            {isPlaying && (
              <Pause size={20} className="text-gray-50 fill-gray-50" />
            )}
          </button>
          <button onClick={() => handleNext()}>
            <ArrowRight
              size={25}
              className="p-1 rounded-full cursor-pointer text-gray-400 hover:bg-orange-100 hover:text-gray-700 transition ease-out duration-300"
            />
          </button>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <Volume2 size={20} className="text-gray-400" />
          <input
            type="range"
            className="cursor-pointer rounded-lg p-1 accent-orange-400"
            min={0}
            max={100}
          />
        </div>
      </div>
      <div className="mt-4 lg:hidden flex items-center justify-between">
        <button onClick={() => setIsRandom(!isRandom)}>
          <Shuffle
            size={25}
            className={`p-1 rounded-full cursor-pointer  hover:bg-orange-100 hover:text-gray-700 transition ease-out duration-300 ${
              isRandom ? "bg-orange-100 text-gray-700" : "text-gray-400"
            }`}
          />
        </button>

        <div className="flex items-center gap-2 lg:gap-4">
          <button onClick={() => handlePrevious()}>
            <ArrowLeft
              size={25}
              className="p-1 rounded-full cursor-pointer text-gray-400 hover:bg-orange-100 hover:text-gray-700 transition ease-out duration-300"
            />
          </button>
          <button
            className="p-3 rounded-full bg-orange-400 cursor-pointer hover:animate-pulse duration-700"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying && (
              <Play size={20} className="text-gray-50 fill-gray-50" />
            )}
            {!isPlaying && (
              <Pause size={20} className="text-gray-50 fill-gray-50" />
            )}
          </button>
          <button onClick={() => handleNext()}>
            <ArrowRight
              size={25}
              className="p-1 rounded-full cursor-pointer text-gray-400 hover:bg-orange-100 hover:text-gray-700 transition ease-out duration-300"
            />
          </button>
        </div>
        <button onClick={() => setIsLoop(!isLoop)}>
          <Repeat
            size={25}
            className={`p-1 rounded-full cursor-pointer  hover:bg-orange-100 hover:text-gray-700 transition ease-out duration-300 ${
              isLoop ? "bg-orange-100 text-gray-700" : "text-gray-400"
            }`}
          />
        </button>
      </div>
    </>
  );
}
