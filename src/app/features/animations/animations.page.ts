import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.page.html',
  styleUrls: ['./animations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,  ]
})
export class AnimationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
