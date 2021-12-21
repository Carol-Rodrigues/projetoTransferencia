import { TransfersDeleteComponent } from './components/transfers/transfers-delete/transfers-delete.component';
import { TransfersEditComponent } from './components/transfers/transfers-edit/transfers-edit.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransfersComponent } from './components/transfers/transfers-create/transfers-create.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },

  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "transferir",
    component: TransfersComponent
  },

  {
    path: "editar/:id",
    component: TransfersEditComponent
  },

  {
    path: "deletar/:id",
    component: TransfersDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
