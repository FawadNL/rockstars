import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'pages-not-found',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundPageModule,
      ),
  },
  {
    path: 'artist-details',
    loadChildren: () =>
      import('./pages/artist-details/artist-details.module').then(
        (m) => m.ArtistDetailsPageModule,
      ),
  },
  {
    path: 'playlist-details',
    loadChildren: () =>
      import('./pages/playlist-details/playlist-details.module').then(
        (m) => m.PlaylistDetailsPageModule,
      ),
  },
  {
    path: '**',
    redirectTo: 'pages-not-found',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
