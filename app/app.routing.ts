import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }      from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { LikeComponent } from './like.component';

const appRoutes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent
	},	
	{
		path: 'heroes',
		component: HeroesComponent
	},
	{
		path: 'likes',
		component: LikeComponent
	},	
	{
	  path: '',
	  redirectTo: '/dashboard',
	  pathMatch: 'full'
	},
	{
	  path: 'detail/:id',
	  component: HeroDetailComponent
	}	
];

export const routing: ModuleWithProviders =
RouterModule.forRoot(appRoutes);