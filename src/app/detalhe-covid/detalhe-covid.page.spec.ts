import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalheCovidPage } from './detalhe-covid.page';

describe('DetalheCovidPage', () => {
  let component: DetalheCovidPage;
  let fixture: ComponentFixture<DetalheCovidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheCovidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheCovidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
