import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Smaforo } from './smaforo';

describe('Smaforo', () => {
  let component: Smaforo;
  let fixture: ComponentFixture<Smaforo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Smaforo],
    }).compileComponents();

    fixture = TestBed.createComponent(Smaforo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
