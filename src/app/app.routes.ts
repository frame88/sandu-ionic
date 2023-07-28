import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'navbar',
    loadComponent: () => import('./shared/navbar/navbar.page').then( m => m.NavbarPage)
  },
  {
    path: 'libri',
    loadComponent: () => import('./features/libri/libri.page').then( m => m.LibriPage)
  },
];
