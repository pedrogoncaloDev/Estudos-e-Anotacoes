import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroFuncionarioComponent } from './form-cadastro-funcionario.component';

describe('FormCadastroFuncionarioComponent', () => {
  let component: FormCadastroFuncionarioComponent;
  let fixture: ComponentFixture<FormCadastroFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCadastroFuncionarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadastroFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
