import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing components
import { GalleryComponent } from './gallery.component';
import { PhotoComponent } from './photo/photo.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {path: '', component: GalleryComponent},
  {path: 'photo', component: PhotoComponent},
  {path: 'album', component: AlbumComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
