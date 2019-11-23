import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaceComponent } from './pace.component';

describe('PaceComponent', () => {
  let component: PaceComponent;
  let fixture: ComponentFixture<PaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
