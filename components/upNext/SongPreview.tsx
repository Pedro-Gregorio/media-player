import type { Song } from "../../types/song";
import { millisecondsToMinutesAndSeconds } from "../../util/Time";

export default function SongPreview({
  previewSong,
  selectedSong,
  handleClick,
}: {
  previewSong: Song;
  selectedSong: Song;
  handleClick: (song: Song) => void;
}) {
  return (
    <button
      className="relative w-full group flex items-center justify-between gap-2 py-2 px-1 rounded-lg hover:bg-gray-200 cursor-pointer"
      onClick={() => handleClick(previewSong)}
    >
      <div className="flex items-center gap-2">
        <img
          src={previewSong.album.images[0].url}
          alt={previewSong.name + " preview"}
          width={40}
          height={40}
          className="rounded-lg p-1 group-hover:bg-gray-50"
        />
        <div className="flex flex-col justify-start text-left space-y-1">
          <p
            className={`text-xs md:text-sm ${
              previewSong == selectedSong
                ? "font-bold text-orange-400"
                : ""
            }`}
          >
            {previewSong.name}
          </p>
          <p className="text-left text-xs opacity-80">
            {previewSong.artists[0].name}
          </p>
        </div>
      </div>
      <p className="text-xs opacity-80">
        {millisecondsToMinutesAndSeconds(previewSong.duration_ms)}
      </p>
    </button>
  );
}
