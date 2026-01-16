import type { Song } from "../../types/song";
import { millisecondsToMinutesAndSeconds } from "../../util/Time";
import React from "react";

export default function Player({
  currentSong,
  playTime,
  setPlayTime,
}: {
  currentSong: Song;
  playTime: number;
  setPlayTime: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="w-full flex-1 py-4">
      <h1 className="text-2xl font-bold">{currentSong.name}</h1>
      <p className="opacity-80 text-sm">{currentSong.artists[0].name}</p>
      <div className="mt-8 w-full flex flex-col">
        <input
          type="range"
          className="cursor-pointer w-full rounded-lg p-1 accent-orange-400"
          min={0}
          step={1}
          max={currentSong.duration_ms}
          value={playTime}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPlayTime(Number(e.currentTarget.value));
          }}
        />
        <div className="mt-2 flex justify-between">
          <p>{millisecondsToMinutesAndSeconds(playTime)}</p>
          <p>{millisecondsToMinutesAndSeconds(currentSong.duration_ms)}</p>
        </div>
      </div>
    </div>
  );
}
