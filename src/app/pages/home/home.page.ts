import { Component, OnInit } from '@angular/core';
import {
  AlertService,
  ArtistService,
  UserService,
} from 'src/app/services';
import { Artists, Playlist } from 'src/app/interfaces';
import { NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // Variable for active segment.
  public segmentValue = 'artists';
  public artistsList: Artists[];
  public playList: Playlist[] = [];
  public searchPlaceHolder = 'Search Artists';
  // flat to check if loader is active.
  public loader = true;
  private page = 1;
  private limit = 20;
  constructor(
    private alertService: AlertService,
    private artistService: ArtistService,
    private navCtrl: NavController,
    public alertController: AlertController,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getArtists();
  }

  /**
   * @description This is function to handle segment change event.
   *
   * @return void
   */
  segmentChanged(ev) {
    this.segmentValue = ev.target.value;
    this.page = 1;
    switch (this.segmentValue) {
      case 'artists':
        this.searchPlaceHolder = 'Search Artists';
        this.getArtists();
        break;
      case 'playlist':
        this.searchPlaceHolder = 'Search Playlists';
        this.getPlayList();
        break;
    }
  }

  /**
   * @description Function to get artist list
   */
  getPlayList() {
    this.playList = this.userService.getPlayList();
  }

  /**
   * @description get list of artist.
   */
  getArtists(searchText: string = '') {
    this.artistService
      .getAllArtists(this.page, this.limit, searchText)
      .subscribe(
        (artists: Artists[]) => {
          if (artists.length > 0) {
            this.artistsList = artists;
          } else {
            this.alertService.showAlert('Unable to load artists');
          }
          this.loader = false;
        },
        (err) => {
          this.alertService.showAlert(
            'Something went wrong please try again later !'
          );
        }
      );
  }
  /**
   * @description - Function to capture search events from search bar
   */
  searchArea(evt) {
    this.page = 1;
    const searchItem = evt.target.value;
    if (this.segmentValue === 'artists') {
      this.getArtists(searchItem);
    } else if (this.segmentValue === 'playlists') {
      this.getPlayList();
    }
  }

  /**
   * @description Function to load more data when user scrolls to down.
   */
  loadMoreArtists(event) {
    this.page = this.page + 1;
    this.artistService.getAllArtists(this.page, this.limit).subscribe(
      (artists: Artists[]) => {
        if (artists.length > 0) {
          // We are using spread operator so we can append new data and new coming data from server api call which can be rendered easily.
          this.artistsList = [...this.artistsList, ...artists];
        } else {
          // If no more data to load keep page count as old.
          this.page = this.page - 1;
          this.alertService.showAlert('Unable to load artists');
        }
        event.target.complete();
      },
      (err) => {
        this.alertService.showAlert(
          'Something went wrong please try again later !'
        );
      }
    );
  }

  /**
   * @description open playlist details page.
   */
  openDetailsPage(playlist = {}) {
    this.navCtrl.navigateForward('/playlist-details', {
      state: {
        playlist
      },
    });
  }

  /**
   * @description function to open artist details page.
   */
  openArtistDetailsPage(artist: Artists) {
    this.navCtrl.navigateForward('/artist-details', {
      state: {
        artist
      },
    });
  }

  /**
   * @description function to add playlist
   */
  async addPlaylist() {
    this.userService.addPlayListAlert(() => {
      this.getPlayList();
    });
  }

  deletePlaylist(playlist: Playlist) {
    this.playList = this.playList.filter((p) => p.id !== playlist.id);
    this.userService.savePlayList(this.playList);
  }

}
