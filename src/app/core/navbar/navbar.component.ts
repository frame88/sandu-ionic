import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [ CommonModule ]
})
export class NavbarComponent {
  navbarOpen = false;

  constructor(private router: Router, private eRef: ElementRef) {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.toggleNavbar();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.navbarOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.navbarOpen = false;
    }
  }
}
