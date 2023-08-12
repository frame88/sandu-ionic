import { Injectable } from '@angular/core';
import { Album } from '../albums.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private albums: Album[] = [
    { name: 'buffetti', images: ['../../assets/images/portrait.jpeg', '../../assets/images/goldfish.png'] },
    { name: 'maredirefare', images: ['../../assets/images/eagle-logo-png-image-free-download-5a3af73e8b5be3.41008882151381382257088571.jpg', 'path4.jpg'] },
    // ...
  ];

  getAlbumByIndex(index: number): Album {
    return this.albums[index];
  }

  constructor() { }
}
