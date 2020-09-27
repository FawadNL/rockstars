import { Component, OnInit } from '@angular/core'
import { AppConfig } from 'src/app/config/config'
import { Router } from '@angular/router'
import { Songs, Artists } from 'src/app/interfaces'
import {
  SongsService,
  AlertService,
  ArtistService,
  UserService,
} from 'src/app/services'
import { NavController, Platform, AlertController } from '@ionic/angular'
@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.page.html',
  styleUrls: ['./artist-details.page.scss'],
})
export class ArtistDetailsPage implements OnInit {
  public logoUrl = AppConfig.imgUrl
  public artist: any
  public songsList: Songs[]
  // flag to check if loader is active
  public loader = true
  public inputRadio = []
  public playlistSongs = []
  constructor(
    private router: Router,
    private alertService: AlertService,
    private songService: SongsService,
    public alertController: AlertController,
    private userService: UserService,
  ) {}

  ngOnInit() {
    const state = this.router.getCurrentNavigation().extras.state
    this.artist = state && state.artist ? state.artist : {}
    this.getSongs(this.artist.name)
    this.getPlaylist()
  }

  getPlaylist() {
    const playList = this.userService.getPlayList()
    if (playList) {
      this.inputRadio = playList.map((p) => {
        return {
          name: 'playlist',
          type: 'radio',
          label: p.name,
          value: p.id,
        }
      })
    }
    const playlistSongs = this.userService.getPlaylistSongs()
    this.playlistSongs = playlistSongs ? playlistSongs : []
  }

  async addSong(song) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Please select playlist',
      inputs: this.inputRadio,
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel')
          },
        },
        {
          text: 'Ok',
          handler: (playlistId) => {
            if (playlistId) {
              this.addSongToPlayList({
                id: `${playlistId}_${song.id}`,
                playid: playlistId,
                song,
              })
            }
          },
        },
      ],
    })
    await alert.present()
  }

  /**
   * @description Function used to add songs to playlist
   */
  addSongToPlayList(playList) {
    if (this.playlistSongs.filter((p) => playList.id === p.id).length <= 0) {
      this.playlistSongs.push(playList)
    }
    this.userService.saveSongsToPlaylist(this.playlistSongs)
  }

  /**
   * @description Get list of songs from server
   *
   * @param searchText - If there is no search text default list of 20 songs will be
   * @return void
   */
  getSongs(artistName) {
    this.loader = true
    this.songService.getAllSongsOfArtist(artistName).subscribe(
      (songs: Songs[]) => {
        if (songs.length > 0) {
          this.songsList = songs
        } else {
          this.alertService.showAlert('No songs available for this artist')
        }
        this.loader = false
      },
      (err) => {
        this.alertService.showAlert(
          'Something went wrong please try again later !',
        )
      },
    )
  }

  formatDate(timeInms) {
    return ` ${Math.floor(timeInms / 1000 / 60)} : ${Math.floor(
      (timeInms / 1000) % 60,
    )}`
  }
}
