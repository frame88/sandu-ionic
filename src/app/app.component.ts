import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavbarPage } from './shared/navbar/navbar.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, NavbarPage],
})
export class AppComponent {
  constructor() {}
}
