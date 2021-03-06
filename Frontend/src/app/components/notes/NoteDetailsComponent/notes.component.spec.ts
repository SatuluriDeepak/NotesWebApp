import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDetailsComponent } from './notes.component';

describe('NotesDetailsComponent', () => {
  let component: NotesDetailsComponent;
  let fixture: ComponentFixture<NotesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
