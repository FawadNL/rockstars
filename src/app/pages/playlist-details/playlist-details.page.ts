import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.page.html',
  styleUrls: ['./playlist-details.page.scss'],
})
export class PlaylistDetailsPage implements OnInit {
  public playlistSongs = [];
  public allPlaylistSongs = [];
  public playlist;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    const state = this.router.getCurrentNavigation().extras
      ? this.router.getCurrentNavigation().extras.state
      : {};
    this.playlist = state && state.playlist ? state.playlist : {};
    this.getSongs(this.playlist.id);
  }

  /**
   * @description Get songs list
   */
  getSongs(playlistId) {
    this.allPlaylistSongs = this.userService.getPlaylistSongs();
    this.allPlaylistSongs = this.allPlaylistSongs ? this.allPlaylistSongs : [];
    this.playlistSongs = this.allPlaylistSongs.filter(
      (song) => song.playid === playlistId
    );
  }

  /**
   * @description Delete song from playlist.
   */
  deletefromPlaylist(item) {
    this.playlistSongs = this.playlistSongs.filter((ps) => ps.id !== item.id);
    this.allPlaylistSongs = this.allPlaylistSongs.filter(
      (ps) => ps.id !== item.id
    );
    this.userService.saveSongsToPlaylist(this.allPlaylistSongs);
  }

  formatDate(timeInms) {
    return ` ${Math.floor(timeInms / 1000 / 60)} : ${Math.floor(
      (timeInms / 1000) % 60
    )}`;
  }
}
