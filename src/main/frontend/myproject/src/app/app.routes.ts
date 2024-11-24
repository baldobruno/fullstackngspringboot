import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ROUTES: Route[] = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent }

];
