import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistDetailsPageRoutingModule } from './artist-details-routing.module';

import { ArtistDetailsPage } from './artist-details.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistDetailsPageRoutingModule,
    PipesModule
  ],
  declarations: [ArtistDetailsPage]
})
export class ArtistDetailsPageModule { }
