import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Funcionario {
  id: number;
  nome: string;
  cargo: string;
  salario: number | null;
  departamento: string;
  email: string;
  telefone: string;
}

@Injectable({ providedIn: 'root' })

export class FuncionariosService {
  private funcionariosSubject  = new BehaviorSubject<Funcionario[]>([
    {
      id: 1,
      nome: "João Silva",
      cargo: "Desenvolvedor Fullstack",
      salario: 7500,
      departamento: "TI",
      email: "joao.silva@empresa.com",
      telefone: "(11) 98765-4321"
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      cargo: "Analista de Recursos Humanos",
      salario: 6200,
      departamento: "RH",
      email: "maria.oliveira@empresa.com",
      telefone: "(11) 99876-5432"
    },
  ])
  funcionario$ = this.funcionariosSubject.asObservable();

  constructor() {}

  getFuncionarios(): Funcionario[] {
    return this.funcionariosSubject.value;
  }

  filterFuncionarios(pFilter:string){
    return this.funcionariosSubject.value.filter(funcionario =>
      Object.values(funcionario)
        .join(' ')
        .toLowerCase()
        .includes(pFilter.toLowerCase())
    );
  }

  addFuncionarios(pFuncionario: Funcionario) {
    const novoFuncionario:Funcionario = pFuncionario;
    novoFuncionario.id = this.funcionariosSubject.value.length + 1;

    let listaAtualizada = this.funcionariosSubject.value;
    listaAtualizada.push(novoFuncionario);

    this.funcionariosSubject.next(listaAtualizada);

    console.log("Adicionado valor");
  }

  editFuncionarios(item: any) {

  }

  deleteFuncionarios(item: any) {

  }
}

