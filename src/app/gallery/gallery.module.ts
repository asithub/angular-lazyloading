import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';

// Importing components
import { GalleryComponent } from './gallery.component';
import { PhotoComponent } from './photo/photo.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    GalleryComponent,
    PhotoComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
