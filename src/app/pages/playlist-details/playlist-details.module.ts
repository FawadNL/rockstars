import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistDetailsPageRoutingModule } from './playlist-details-routing.module';

import { PlaylistDetailsPage } from './playlist-details.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistDetailsPageRoutingModule,
    PipesModule
  ],
  declarations: [PlaylistDetailsPage]
})
export class PlaylistDetailsPageModule { }
