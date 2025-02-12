import { Injectable } from "@angular/core";
import { Compra } from "./compra.model";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class CarrinhoService{
  private carrinho:Compra[] = [];
  private produtoAdicionado$ = new BehaviorSubject<number>(0);

  obterQtdeCarrinho(){
    return this.produtoAdicionado$.asObservable();
  }

  adicionarProduto(produto: string){
    const produtoCompra = ({
      id: this.carrinho.length + 1,
      produto: produto
    });

    this.carrinho.push(produtoCompra);
    this.produtoAdicionado$.next(this.carrinho.length);
  }

}
