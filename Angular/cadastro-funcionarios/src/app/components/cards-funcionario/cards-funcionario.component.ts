import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms'; // ✅ Importa FormsModule
import { FuncionariosService } from '../../services/funcionarios.service';
import { Funcionario } from '../../services/funcionarios.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cards-funcionario.component.html',
  styleUrls: ['./cards-funcionario.component.sass']
})
export class CardsFuncionarioComponent implements OnDestroy {
  cardsFuncionarios: Funcionario[] = [];
  funcionariosService = inject(FuncionariosService);
  getFuncionarios$ = this.funcionariosService.getFuncionarios();
  sub = new Subscription();
  filtro: string = "";

  constructor() {
    const subContador = this.getFuncionarios$.subscribe(value => {
      this.cardsFuncionarios = value;
      console.log("VALOR EMITIDO: ", value);
    });

    this.sub.add(subContador);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
