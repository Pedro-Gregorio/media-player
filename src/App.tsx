import "./App.css";
import type { Song } from "../types/song";
import { songs } from "../data/songs";
import Spinner from "../components/currentPlayer/Spinner";
import Player from "../components/currentPlayer/Player";
import Controls from "../components/currentPlayer/Controls";
import SongPreview from "../components/upNext/SongPreview";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isRandom, setIsRandom] = useState<boolean>(false);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [playTime, setPlayTime] = useState<number>(0);

  const currentSong = songs[currentSongIndex];

  function resetPlayer() {
    setIsPlaying(true);
    setPlayTime(0);
  }

  function handleSongSelection(selectedSong: Song) {
    setCurrentSongIndex(songs.findIndex((song) => song === selectedSong));
    resetPlayer();
  }

  function handlePrevious() {
    const getRandomIndex = () => Math.floor(Math.random() * songs.length);
    const getPrevIndex = (i: number) => (i - 1 + songs.length) % songs.length;

    setCurrentSongIndex((prev) =>
      isRandom ? getRandomIndex() : getPrevIndex(prev)
    );
    resetPlayer();
  }

  const handleNext = useCallback(() => {
    setCurrentSongIndex((prevIndex) => {
      const nextIndex = isRandom
        ? Math.floor(Math.random() * songs.length)
        : (prevIndex + 1) % songs.length;

      return nextIndex;
    });

    setPlayTime(0);
    setIsPlaying(true);
  }, [isRandom]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setPlayTime((prev) => {
        if (prev >= currentSong.duration_ms) {
          return prev;
        }
        return prev + 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, currentSong.duration_ms]);

  useEffect(() => {
    if (playTime >= currentSong.duration_ms && isPlaying) {
      const timer = setTimeout(() => {
        handleNext();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [playTime, currentSong.duration_ms, isPlaying, handleNext]);

  return (
    <main className="min-h-screen bg-gray-200 text-zinc-950 flex flex-col items-center justify-center px-4 max-md:py-4">
      <div className="md:w-2xl lg:w-4xl bg-gray-50 rounded-xl border-2 border-gray-50 shadow-2xl py-12  px-8">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:gap-12">
          <Spinner
            image={currentSong.album.images[1].url}
            name={currentSong.name}
            spin={isPlaying}
          />
          <div className="flex-1">
            <Player
              currentSong={currentSong}
              playTime={playTime}
              setPlayTime={setPlayTime}
            />
            <Controls
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              isRandom={isRandom}
              setIsRandom={setIsRandom}
              isLoop={isLoop}
              setIsLoop={setIsLoop}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              playTime={playTime}
              setPlayTime={setPlayTime}
            />
          </div>
        </div>
        <div className="mt-4 mx-auto w-full py-px bg-gray-200"></div>
        <div className="mt-4 px-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-wider uppercase">
              Up Next
            </h2>
            <p className="bg-gray-200 text-gray-500 px-2 py-1 rounded-xl text-xs opacity-80">
              {songs.length} songs
            </p>
          </div>
          <div className="mt-2 h-46 md:h-78 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] space-y-2">
            {songs.map((song: Song, index: number) => (
              <SongPreview
                selectedSong={currentSong}
                handleClick={() => handleSongSelection(song)}
                previewSong={song}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
