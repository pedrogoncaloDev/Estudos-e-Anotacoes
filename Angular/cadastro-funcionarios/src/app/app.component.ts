import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsFuncionarioComponent } from "./components/cards-funcionario/cards-funcionario.component";
import { FormCadastroFuncionarioComponent } from "./components/form-cadastro-funcionario/form-cadastro-funcionario.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardsFuncionarioComponent, FormCadastroFuncionarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'cadastro-funcionarios';
}
