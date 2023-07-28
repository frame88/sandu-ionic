import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavbarPage } from 'src/app/shared/navbar/navbar.page';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.page.html',
  styleUrls: ['./collaborations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarPage]
})
export class CollaborationsPage implements OnInit {

  collabs = [
    {title: 'Buffetti', imgPath: '../../../assets/images/collaborations-preview/calendari.jpeg'},
    {title: 'MareDireFare', imgPath: '../../../assets/images/collaborations-preview/submarine.png'},
    {title: 'Andata in porto', imgPath: '../../../assets/images/collaborations-preview/boat.jpeg'},
    {title: 'Nazioni unite', imgPath: '../../../assets/images/collaborations-preview/fao.jpeg'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
