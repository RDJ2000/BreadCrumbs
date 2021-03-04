import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DoCharityComponent } from './do-charity/do-charity.component';
import { HistoryComponent } from './history/history.component';

import { MainPagePage } from './main-page.page';

const routes: Routes = [
  {
    path: '',
    component: MainPagePage,
    children: [
      {
        path: 'doCharity',
        component:DoCharityComponent
      },
      {
        path: 'history',
        component:HistoryComponent
      },
      {
        path: 'account',
        component:AccountComponent
      },
      {
        path: '',
        redirectTo: 'doCharity',
       
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPagePageRoutingModule {}
