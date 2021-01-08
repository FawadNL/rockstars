import { ArtistListCache } from './../../interfaces/song';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private cache: ArtistListCache = {};
  private BUFFER_SIZE = 1;
  constructor(private httpClient: HttpClient) { }

  /**
   * @description Function to get list of artists.
   *
   * @param  number  page current page of item.
   * @param number  limit perPage item with each request.
   * @param  artist  artistName artist name
   */
  getAllArtists(page, limit, artistName = '') {
    // get page index.
    let cacheIndex = `artist_page_${page}`;
    // create key is Search keywords for artist name.
    const artist_keywords = artistName.split(' ').join('_');
    cacheIndex = artist_keywords ? `${cacheIndex}_${artist_keywords}` : cacheIndex;
    if (!this.cache || !this.cache[cacheIndex]) {
      this.cache[cacheIndex] = this.getArtistfromServer(page, limit, artistName).pipe(
        shareReplay(this.BUFFER_SIZE)
      );
    }
    return this.cache[cacheIndex];
  }

  // Call search list api calls
  getArtistfromServer(page, limit, artistName = ''): any {

    const searchParams = artistName ? `&name_like=${artistName}` : '';
    return this.httpClient.get(
      `${environment.apiURL}/artists?_page=${page}&_limit=${limit}${searchParams}`,
    );
  }
}
