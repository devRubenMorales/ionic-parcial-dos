import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { Tab2Page } from '../tab2/tab2.page';

const routes: Routes = [
  {
    path: 'exchanges',
    component: TabsPage,
    children: [
      {
        path: 'list',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'info-exchange',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
        component: Tab2Page
      },
      {
        path: '',
        redirectTo: '/exchanges/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/exchanges/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
