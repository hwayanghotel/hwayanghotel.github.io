/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoveTopIconComponent } from './move-top-icon.component';

describe('MoveTopIconComponent', () => {
  let component: MoveTopIconComponent;
  let fixture: ComponentFixture<MoveTopIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveTopIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveTopIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
