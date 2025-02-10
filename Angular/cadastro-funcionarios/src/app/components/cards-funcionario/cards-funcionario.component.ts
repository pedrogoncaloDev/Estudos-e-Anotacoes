import { Component, OnDestroy, OnInit } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop'
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FuncionariosService } from '../../services/funcionarios.service';
import { Subscription } from 'rxjs';


// import { Funcionario } from '../models/funcionario.model';

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
  selector: 'app-cards-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cards-funcionario.component.html',
  styleUrl: './cards-funcionario.component.sass'
})

export class CardsFuncionarioComponent {
  funcionarios: Funcionario[] = [];
  private subscription!: Subscription;
  filtro: string = "";

  constructor(private funcionarioService: FuncionariosService) {}

  ngOnInit(): void {
    this.subscription = this.funcionarioService.funcionario$.subscribe(lista => {
      this.funcionarios = lista;
      
      console.log("Lista funcionarios", this.funcionarios);
    })
  }

  onFiltroChange() {
    this.funcionarioService.filterFuncionarios(this.filtro);
  }
}
