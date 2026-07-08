import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Inscription } from './pages/inscription/inscription';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'sign',
        component:Inscription
    }
];
