import { Injectable } from '@angular/core';
import { URLs } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private httpClient: HttpClient) { }

  /**
   * @description Function to get list of songs from server.
   *
   * @param  number  page current page of item.
   * @param  number  limit perPage item with each request.
   * @param  string  songTitle song title to search song.
   *
   * @returns Observable
   */
  getAllSongs(page = 1, limit = 20, songTitle = '') {
    // If search item is not provided then default list will be appear.
    const searchParams = songTitle ? `&name_like=${songTitle}` : '';

    return this.httpClient.get(
      `${URLs.apiURL}/songs?_page=${page}&_limit=${limit}${searchParams}`,
    );
  }

  /**
   * @description Function to get list of all songs of an artist.
   *
   * @param  string  artistName Artist name.
   */
  getAllSongsOfArtist(artistName: string) {
    return this.httpClient.get(`${URLs.apiURL}/songs?artist=${artistName}`);
  }
}
