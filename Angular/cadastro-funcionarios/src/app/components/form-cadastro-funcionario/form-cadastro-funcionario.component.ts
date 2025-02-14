import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionariosService } from '../../services/funcionarios.service';
import { Funcionario } from '../../services/funcionarios.model';

@Component({
  selector: 'app-form-cadastro-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-cadastro-funcionario.component.html',
  styleUrls: ['./form-cadastro-funcionario.component.sass']
})

export class FormCadastroFuncionarioComponent {
  funcionarioSelecionado:Funcionario = {
    id: 0,
    nome: '',
    cargo: '',
    salario: null,
    departamento: '',
    email: '',
    telefone: ''
  };

  constructor(private funcionarioServive: FuncionariosService){}

  addFuncionario(){
    this.funcionarioServive.addFuncionarios(this.funcionarioSelecionado);
    this.resetaVariavel();
  }

  editarFuncionario(pFuncionario:any){

  }

  deletarFuncionario(id:string){

  }

  resetaVariavel() {
    this.funcionarioSelecionado = {
      id: 0,
      nome: '',
      cargo: '',
      salario: null,
      departamento: '',
      email: '',
      telefone: ''
    };
  }
}
