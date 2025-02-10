import { Injectable, signal } from '@angular/core';

interface Funcionario {
  id: number;
  nome: string;
  cargo: string;
  salario: number;
  departamento: string;
  email: string;
  telefone: string;
}

@Injectable({ providedIn: 'root' })

export class FuncionariosService {
  funcionarios = signal<Funcionario[]>([
    {
      "id": 1,
      "nome": "João Silva",
      "cargo": "Desenvolvedor Fullstack",
      "salario": 7500,
      "departamento": "TI",
      "email": "joao.silva@empresa.com",
      "telefone": "(11) 98765-4321"
    },
    {
      "id": 2,
      "nome": "Maria Oliveira",
      "cargo": "Analista de Recursos Humanos",
      "salario": 6200,
      "departamento": "RH",
      "email": "maria.oliveira@empresa.com",
      "telefone": "(11) 99876-5432"
    },
    {
      "id": 3,
      "nome": "Carlos Santos",
      "cargo": "Gerente de Projetos",
      "salario": 9800,
      "departamento": "Gestão",
      "email": "carlos.santos@empresa.com",
      "telefone": "(11) 96543-2109"
    },
    {
      "id": 4,
      "nome": "Ana Souza",
      "cargo": "UX/UI Designer",
      "salario": 7000,
      "departamento": "Design",
      "email": "ana.souza@empresa.com",
      "telefone": "(11) 97654-3210"
    },
    {
      "id": 5,
      "nome": "Pedro Ferreira",
      "cargo": "Engenheiro de Software",
      "salario": 8500,
      "departamento": "TI",
      "email": "pedro.ferreira@empresa.com",
      "telefone": "(11) 93456-7890"
    },
    {
      "id": 6,
      "nome": "Juliana Mendes",
      "cargo": "Coordenadora de Marketing",
      "salario": 7200,
      "departamento": "Marketing",
      "email": "juliana.mendes@empresa.com",
      "telefone": "(11) 91234-5678"
    },
    {
      "id": 7,
      "nome": "Ricardo Lima",
      "cargo": "Técnico de Suporte",
      "salario": 4500,
      "departamento": "TI",
      "email": "ricardo.lima@empresa.com",
      "telefone": "(11) 92345-6789"
    },
    {
      "id": 8,
      "nome": "Fernanda Costa",
      "cargo": "Gerente Financeiro",
      "salario": 10500,
      "departamento": "Financeiro",
      "email": "fernanda.costa@empresa.com",
      "telefone": "(11) 97612-3456"
    },
    {
      "id": 9,
      "nome": "Gabriel Martins",
      "cargo": "Analista de Dados",
      "salario": 7800,
      "departamento": "TI",
      "email": "gabriel.martins@empresa.com",
      "telefone": "(11) 93210-9876"
    },
    {
      "id": 10,
      "nome": "Larissa Pereira",
      "cargo": "Supervisora de Atendimento",
      "salario": 6800,
      "departamento": "Atendimento",
      "email": "larissa.pereira@empresa.com",
      "telefone": "(11) 96578-1234"
    }
  ]);

  filterFuncionarios(pFilter:string){
    return this.funcionarios().filter(funcionario =>
      Object.values(funcionario)
        .join(' ')
        .toLowerCase()
        .includes(pFilter.toLowerCase())
    );
  }

  addFuncionarios(item: any) {

  }

  editFuncionarios(item: any) {

  }

  deleteFuncionarios(item: any) {

  }
}

