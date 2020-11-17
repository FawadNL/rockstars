import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private httpClient: HttpClient) { }

  /**
   * @description Function to get list of artists.
   *
   * @param  number  page current page of item.
   * @param number  limit perPage item with each request.
   * @param  artist  artistName artist name
   */
  getAllArtists(page, limit, artistName = '') {
    const searchParams = artistName ? `&name_like=${artistName}` : '';
    return this.httpClient.get(
      `${environment.apiURL}/artists?_page=${page}&_limit=${limit}${searchParams}`,
    );
  }
}
