import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrameBuybackPage } from './frame-buyback.page';

describe('FrameBuybackPage', () => {
  let component: FrameBuybackPage;
  let fixture: ComponentFixture<FrameBuybackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameBuybackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrameBuybackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
