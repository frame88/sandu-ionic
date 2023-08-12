import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NavbarComponent, CommonModule ],
})
export class HomePage {
  modalOpen = false;
  selectedPhotoSrc: string | null = null;
  selectedPhotoAlt: string | null = null;

  openModal(src: string, alt: string) {
    this.selectedPhotoSrc = src;
    this.selectedPhotoAlt = alt;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedPhotoSrc = null;
    this.selectedPhotoAlt = null;
  }
}
