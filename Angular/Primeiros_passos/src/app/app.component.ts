import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'teste-selector', // OBRIGATÓRIO, é o nome da tag que vai ser chamada no HTML

  // se não tiver isso no componente o valor padrão é true
  // se for false, o imports não funciona e ae precisa importar no app.module.ts
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  

  // Template é OBRIGATÓRIO, é o que vai ser renderizado na tela	
  // O HTML eu posso chamar um arquivo externo dessa maneira
  templateUrl: './app.component.html', 

  // ou colocar o ele direto aqui
  // template: `
  //   <h1>Hello World</h1>
  // `

  styleUrl: './app.component.scss', // O CSS não é obrigatório colocar no componente
})

export class AppComponent {
  title = 'Primeiros_passos';

  logar(event:string){
    console.log('EMIT', event);
  }
}
