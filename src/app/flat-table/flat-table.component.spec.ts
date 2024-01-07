/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlatTableComponent } from './flat-table.component';

describe('FlatTableComponent', () => {
    let component: FlatTableComponent;
    let fixture: ComponentFixture<FlatTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FlatTableComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlatTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
