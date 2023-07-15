/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinkTreeComponent } from './link-tree.component';

describe('LinkTreeComponent', () => {
  let component: LinkTreeComponent;
  let fixture: ComponentFixture<LinkTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
