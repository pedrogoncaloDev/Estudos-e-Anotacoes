import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, Observable } from "rxjs";
import { Funcionario } from './funcionarios.model';

@Injectable({ providedIn: 'root' })

export class FuncionariosService {
  private funcionarios: Funcionario[] = [];
  private funcionariosSubject$  = new BehaviorSubject<Funcionario[]>([]);

  getFuncionarios(): Observable<Funcionario[]> {
    return this.funcionariosSubject$.asObservable();
  }

  addFuncionarios(pFuncionario: Funcionario) {
    const novoFuncionario:Funcionario = pFuncionario;
    novoFuncionario.id = this.funcionariosSubject$.value.length + 1;

    this.funcionarios.push(novoFuncionario);
    this.funcionariosSubject$.next(this.funcionarios);

    console.log("Adicionado valor", this.funcionariosSubject$.getValue());
  }

  editFuncionarios(item: any) {
    
  }

  deleteFuncionarios(item: any) {

  }
}

