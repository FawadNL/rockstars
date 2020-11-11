export interface Songs {
  id: number;
  name: string;
  year: number;
  artist: string;
  shortname: string;
  bpm: number;
  duration: number;
  genre: string;
  spotifyId: string;
  album: string;
}

export interface Artists {
  id: number;
  name: string;
}

export interface Playlist {
  id: string;
  name: string;
}

export interface PlayListSong {
  playlistId: string;
  song: Songs;
}
