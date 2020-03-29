import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalheComunicadoPage } from './detalhe-comunicado.page';

describe('DetalheComunicadoPage', () => {
  let component: DetalheComunicadoPage;
  let fixture: ComponentFixture<DetalheComunicadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheComunicadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheComunicadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
