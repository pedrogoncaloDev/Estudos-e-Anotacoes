import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CardsFuncionarioComponent } from './components/cards-funcionario/cards-funcionario.component';
import { FormCadastroFuncionarioComponent } from './components/form-cadastro-funcionario/form-cadastro-funcionario.component';

export const routes: Routes = [
  {
    path:'',
    component: CardsFuncionarioComponent
  },
  {
    path:'home',
    component: CardsFuncionarioComponent
  },
  {
    path:'cadastro',
    component: FormCadastroFuncionarioComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
