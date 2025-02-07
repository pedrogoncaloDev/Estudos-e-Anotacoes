import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFuncionarioComponent } from './cards-funcionario.component';

describe('CardsFuncionarioComponent', () => {
  let component: CardsFuncionarioComponent;
  let fixture: ComponentFixture<CardsFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsFuncionarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
