import type { Artist } from "./artist";
import type { Image } from "./image";

interface Album {
  images: Image[]
}

export interface Song {
  name: string,
  duration_ms: number,
  artists: Artist[],
  album: Album
}