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
  {
    path: 'animazioni',
    loadComponent: () => import('./features/animations/animations.page').then( m => m.AnimationsPage)
  },
  {
    path: 'collaborazioni',
    loadComponent: () => import('./features/collaborations/collaborations.page').then( m => m.CollaborationsPage)
  },
  {
    path: 'presentazione',
    loadComponent: () => import('./features/iam/iam.page').then( m => m.IamPage)
  },
  {
    path: 'contacts',
    loadComponent: () => import('./features/contacts/contacts.page').then( m => m.ContactsPage)
  },
];
