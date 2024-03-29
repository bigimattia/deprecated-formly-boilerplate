import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesPage } from './templates.page';

const routes: Routes = [
  {
    path: '',
    component: TemplatesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesPageRoutingModule {}
