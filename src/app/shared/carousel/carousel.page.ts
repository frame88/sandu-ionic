import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Album } from 'src/app/albums.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.page.html',
  styleUrls: ['./carousel.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CarouselPage {
  @Input()
  album!: Album;
  selectedImage!: string;

  ngOnInit() {
    this.selectedImage = this.album!.images[0]; // Inizializza con la prima immagine
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }
}