import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.page.html',
  styleUrls: ['./libri.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,  ]
})
export class LibriPage implements OnInit {

  books: any;  

  constructor() { }

  ngOnInit() {
      this.books = [
      {title: 'Abecedario ornitologico', imgPath: '../../../assets/images/libri-preview/abecedario.jpg'},
      {title: 'Abitar', imgPath: '../../../assets/images/libri-preview/abitar.jpg'},
      {title: 'L\'isola sconosciuta', imgPath: '../../../assets/images/libri-preview/isolasconosciuta.jpg'},
      {title: 'Mucca', imgPath: '../../../assets/images/libri-preview/mucca.jpg'},
      {title: 'Tevere', imgPath: '../../../assets/images/libri-preview/tevere.jpg'},
      {title: 'Palloncini migranti', imgPath: '../../../assets/images/libri-preview/pallonciniMig.jpg'}
    ]
  }

  ngOnDestroy() {
    console.log(this.books);
    this.books = null;
    console.log(this.books);
  }
}

