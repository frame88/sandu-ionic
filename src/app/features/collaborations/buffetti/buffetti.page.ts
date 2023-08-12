import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarouselPage } from 'src/app/shared/carousel/carousel.page';
import { Album } from 'src/app/albums.model';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-buffetti',
  templateUrl: './buffetti.page.html',
  styleUrls: ['./buffetti.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CarouselPage]
})
export class BuffettiPage implements OnInit {
  album!: Album;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.album = this.albumService.getAlbumByIndex(0); // Sostituisci con la logica corretta
  }

}
