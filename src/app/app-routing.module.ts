import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { ListComponent } from './pages/list/list.component';
import { UpdateCarComponent } from './pages/update-car/update-car.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: ListComponent,
  },
  {
    path: 'create',
    component: AddCarComponent,
  },
  {
    path: 'update/:placa',
    component: UpdateCarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
