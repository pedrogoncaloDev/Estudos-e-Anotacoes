// Forma 1 para tratar vazamento de memória
import { Component, inject, OnDestroy } from "@angular/core";
import { CarrinhoService } from "./carrinho.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-carrinho',
  standalone: true,
  template: `
    <span>Qtde Carrinho: </span>
    <span>{{ qtdeProdutos }}</span>
  `
})

export class CarrinhoComponent implements OnDestroy{
  CarrinhoService = inject(CarrinhoService);
  qtdeCarrinho$ = this.CarrinhoService.obterQtdeCarrinho();

  qtdeProdutos = 0;
  sub = new Subscription();

  constructor(){
    const subContador = this.qtdeCarrinho$.subscribe(qtde => {
      console.log("VALOR EMITIDO: ", qtde);
      this.qtdeProdutos = qtde;
    });

    this.sub.add(subContador);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}



// Forma 2 para tratar vazamento de memória
// import { Component, inject } from "@angular/core";
// import { CarrinhoService } from "./carrinho.service";
// import { AsyncPipe } from "@angular/common";

// @Component({
//   selector: 'app-carrinho',
//   standalone: true,
//   imports: [AsyncPipe],
//   template: `
//     <span>Qtde Carrinho: </span>
//     <span>{{ qtdeCarrinho$ | async }}</span>
//   `
// })

// export class CarrinhoComponent{
//   CarrinhoService = inject(CarrinhoService);
//   qtdeCarrinho$ = this.CarrinhoService.obterQtdeCarrinho();
// }
