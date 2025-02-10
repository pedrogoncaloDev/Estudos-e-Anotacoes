import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FuncionariosService } from '../../services/funcionarios.service';

@Component({
  selector: 'app-cards-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cards-funcionario.component.html',
  styleUrl: './cards-funcionario.component.sass'
})

export class CardsFuncionarioComponent {
  constructor(public funcionarioService: FuncionariosService) {}

  filtro: string = "";

  funcionariosFiltrados() {
    return this.funcionarioService.filterFuncionarios(this.filtro);
  }
}
