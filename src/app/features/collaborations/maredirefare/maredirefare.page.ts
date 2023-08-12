import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Album } from 'src/app/albums.model';
import { AlbumService } from 'src/app/service/album.service';
import { CarouselPage } from 'src/app/shared/carousel/carousel.page';

@Component({
  selector: 'app-maredirefare',
  templateUrl: './maredirefare.page.html',
  styleUrls: ['./maredirefare.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CarouselPage]
})
export class MaredirefarePage implements OnInit {
  album!: Album;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.album = this.albumService.getAlbumByIndex(1); // Sostituisci con la logica corretta
  }
}
