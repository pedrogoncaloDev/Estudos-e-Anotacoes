import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarrinhoComponent } from './compras/carrinho.component';
import { CarrinhoService } from './compras/carrinho.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CarrinhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observables';

  inputProduto:string = "";
  private carrinhoService = inject(CarrinhoService);
  mostrarContador:boolean = true;

  /* private timer = new Promise<string>((resolver, rejeitar) => {
    console.log("PROMISE INICIADA");

    setTimeout(() => {
      resolver("RESOLVIDO A PROMISE")
    }, 5000);
  }) */

  // o $ na variavel é uma convenção no angular para indicar que a variavel é do tipo observable
  // private timer$ = new Observable<string>(sub => {
  //   console.log("INICIADO O OBSERVABLE");

  //   setTimeout(() => {
  //     sub.next("RESOLVIDO O OBSERVABLE");
  //     // sub.complete(); = finaliza o observable (ele não vai mais emitir valores)
  //   }, 5000);
  // })

  // ngOnInit(): void {
  //   this.timer$.subscribe(value => console.log(value));
  // }

  adicionarProduto(){
    this.carrinhoService.adicionarProduto(this.inputProduto);
    this.inputProduto = ""
  }
}
