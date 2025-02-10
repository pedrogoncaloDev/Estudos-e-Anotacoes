import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionariosService } from '../../services/funcionarios.service'

interface Funcionario {
  id: number;
  nome: string;
  cargo: string;
  salario: number;
  departamento: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-form-cadastro-funcionario',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-cadastro-funcionario.component.html',
  styleUrls: ['./form-cadastro-funcionario.component.sass']
})

export class FormCadastroFuncionarioComponent {
  funcionarioSelecionado:Funcionario = {
    id: 0,
    nome: '',
    cargo: '',
    salario: 0,
    departamento: '',
    email: '',
    telefone: ''
  };

  constructor(private funcionarioServive: FuncionariosService){}

  addFuncionario(){
    const funcionarios = this.funcionarioServive.getFuncionarios();

    if (funcionarios.length > 0) {
      const lastFuncionario = funcionarios[funcionarios.length - 1];
      this.funcionarioSelecionado.id = lastFuncionario.id + 1;
    } else {
      this.funcionarioSelecionado.id = 1;
    }

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
      salario: 0,
      departamento: '',
      email: '',
      telefone: ''
    };
  }
}
