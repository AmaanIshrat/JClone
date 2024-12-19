import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import {Header}
import { WebComponent } from './components/products/web/web.component';
import { EcomComponent } from './components/products/ecom/ecom.component';
import { PriceComponent } from './components/price/price.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './core/guards/auth.guard';
import { SitesComponent } from './components/user/sites/sites.component';
import { ManageComponent } from './components/user/manage/manage.component';
import { LayoutComponent } from '../templates/webtemplates/webtemp1/layout/layout.component';
import { Layout1Component } from '../templates/webtemplates/webtemp2/layout1/layout1.component';

export const routes: Routes = [
    {
        path: '', // Default route
        redirectTo: 'home', // Redirect to 'home'
        pathMatch: 'full' // Ensures it matches the full path
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path:'price',
        component: PriceComponent,
      },
      {
        path:'user',
        component : UserComponent,
        canActivate: [AuthGuard],
      },
      {
        path : 'sites',
        component : SitesComponent,
      },
      {
       path :'manage',
       component : ManageComponent
      },
    {
        path: 'products',
        children: [
            {
                path: 'web',
                component :WebComponent
            },
            {
               path:'ecom',
               component : EcomComponent
            },
        ],
    },
    {
      path: 'webtemp1',
      component: LayoutComponent,
      loadChildren: () =>
        import('../templates/webtemplates/webtemp1/webtemp1.module').then(
          (m) => m.Webtemp1Module
        ),
    },
    {
      path : 'webtemp2',
      component : Layout1Component,
      loadChildren: () =>
        import('../templates/webtemplates/webtemp2/webtemp2.module').then(
          (m) => m.Webtemp2Module
        ),
    }
    // {
    //   path: 'template',
    //   children: [
    //     {
    //       path: 'web',
    //       children: [
    //         { path: 'web1', component: Web1Component },
    //         // { path: 'web2', component: Web2Component }
    //       ]
    //     },
    //     {
    //       path: 'ecom',
    //       // children: [
    //       //   { path: 'ecom1', component: Ecom1Component },
    //       //   { path: 'ecom2', component: Ecom2Component }
    //       // ]
    //     }
    //   ]
    // }
];
