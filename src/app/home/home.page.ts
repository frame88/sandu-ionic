import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavbarPage } from '../shared/navbar/navbar.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NavbarPage],
})
export class HomePage {
  constructor() {}
}
