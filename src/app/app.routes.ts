import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'dashboard',
    loadComponent:() => import('./dashboard/dashboard.component'),
    // grupo de rutas hijas
    children:[
      {
        path:'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
      },
      {
        path:'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
      },
      {
        path:'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options/deferOptions.component')
      },
      {
        path:'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
      },
      {
        path:'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component')
      },
      {
        path:'user-list',
        title: 'Users',
        loadComponent: () => import('./dashboard/pages/users/users.component')
      },
      {
        path:'view-transition-1',
        title: 'view-transition-1',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component')
      },
      {
        path:'view-transition-2',
        title: 'view-transition-2',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component')
      },
      {
        path:'', redirectTo:'control-flow', pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  }
];
