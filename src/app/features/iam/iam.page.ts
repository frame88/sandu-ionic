import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavbarPage } from 'src/app/shared/navbar/navbar.page';

@Component({
  selector: 'app-iam',
  templateUrl: './iam.page.html',
  styleUrls: ['./iam.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarPage]
})
export class IamPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
