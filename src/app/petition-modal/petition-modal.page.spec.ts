import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetitionModalPage } from './petition-modal.page';

describe('PetitionModalPage', () => {
  let component: PetitionModalPage;
  let fixture: ComponentFixture<PetitionModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetitionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
