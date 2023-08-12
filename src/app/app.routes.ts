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
    path: 'contatti',
    loadComponent: () => import('./features/contacts/contacts.page').then( m => m.ContactsPage)
  },
  {
    path: 'iam',
    loadComponent: () => import('./features/iam/iam.page').then( m => m.IamPage)
  },
  {
    path: 'carousel',
    loadComponent: () => import('./shared/carousel/carousel.page').then( m => m.CarouselPage)
  },
  {
    path: 'buffetti',
    loadComponent: () => import('./features/collaborations/buffetti/buffetti.page').then( m => m.BuffettiPage)
  },  {
    path: 'maredirefare',
    loadComponent: () => import('./features/collaborations/maredirefare/maredirefare.page').then( m => m.MaredirefarePage)
  },



];
