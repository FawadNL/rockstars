import { Injectable } from '@angular/core'
import { StorageService } from '../storage/storage.service'
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public storageService: StorageService) {}

  /**
   * @description function to save playlist.
   */
  savePlayList(playList) {
    this.storageService.setData('playlist', JSON.stringify(playList))
  }

  /**
   * @description function to get playlist.
   */
  getPlayList() {
    return this.storageService.getStoredJsonData('playlist')
  }

  /**
   * @description function to get playlist songs.
   */
  getPlaylistSongs() {
    return this.storageService.getStoredJsonData('playlistsongs')
  }

  /**
   * @description function to save songs to playlist.
   */
  saveSongsToPlaylist(playList) {
    this.storageService.setData('playlistsongs', JSON.stringify(playList))
  }
}
