import { Component, 
  signal,
  Input,
  Output,
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  SimpleChanges, 
  output,
  EventEmitter
} from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule, FormsModule, CommonModule, HttpClientModule], // Adicionar HttpClientModule aos imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  name = "Pedro";
  count = signal(0);
  valueBool = false;
  lista = ["Pedro", "Gabriel", "João", "Maria"];
  src_img = "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10579/capivara-organizacao-social-genitalia-e-comportamento-social-em-cativeiro-cpt.jpg";

  @Input("nome") minhaPropsDeFora!: string; // Props como no Vue.js
  @Output() emitindoValorName = new EventEmitter<string>(); // Como os emits do Vue.js

  constructor(private service: HelloWorldService) {
    this.service.getHelloWorld().subscribe(
      {
          next: (data : any) => {
              console.log(data);
            },
            error: (error : any) => {
                console.error('error', error);
              },
      complete: () => { 
          console.log('finalizou');
        }
      }
    )   
  }
    
  ClickButton(){
    this.count.update(count => count++);
    this.emitindoValorName.emit(this.name);

    console.log('PROPS', this.minhaPropsDeFora);
  }
}