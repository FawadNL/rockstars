import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public storageService: StorageService, private alertController: AlertController) { }

  /**
   * @description function to add playlist
   */
  async addPlayListAlert(callback) {
    const alert = await this.alertController.create({
      header: 'Create playlist',
      inputs: [
        {
          name: 'playlist',
          type: 'text',
          placeholder: 'Please add playlist name',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Cancel action.
          },
        },
        {
          text: 'Ok',
          handler: (data) => {
            // Call save playlist.
            if (data.playlist) {
              this.saveplayList(data.playlist);
              callback();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  /**
   * @description Create new playlist object and add to new aray.
   */
  saveplayList(playlist) {
    const playListId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    const availablePlaylist = this.getPlayList();
    availablePlaylist.push({
      id: playListId,
      name: playlist,
    });
    this.savePlayList(availablePlaylist);
  }

  /**
   * @description function to save playlist.
   */
  savePlayList(playList) {
    this.storageService.setData('playlist', JSON.stringify(playList));
  }

  /**
   * @description function to get playlist.
   */
  getPlayList() {
    const playlist = this.storageService.getStoredJsonData('playlist');
    return playlist ? playlist : [];
  }

  /**
   * @description function to get playlist songs.
   */
  getPlaylistSongs() {
    return this.storageService.getStoredJsonData('playlistsongs');
  }

  /**
   * @description function to save songs to playlist.
   */
  saveSongsToPlaylist(playList) {
    this.storageService.setData('playlistsongs', JSON.stringify(playList));
  }
}
