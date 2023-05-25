/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlatBenchComponent } from './flat-bench.component';

describe('FlatBenchComponent', () => {
  let component: FlatBenchComponent;
  let fixture: ComponentFixture<FlatBenchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatBenchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatBenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
