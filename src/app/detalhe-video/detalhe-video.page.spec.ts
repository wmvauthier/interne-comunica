import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalheVideoPage } from './detalhe-video.page';

describe('DetalheVideoPage', () => {
  let component: DetalheVideoPage;
  let fixture: ComponentFixture<DetalheVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
