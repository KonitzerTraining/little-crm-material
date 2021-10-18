import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {MockComponent, MockComponents} from "ng-mocks";
import {NavigationComponent} from "./navigation/navigation.component";

// fdescribe focus on
// xdescribe eXclude
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      // schemas: [NO_ERRORS_SCHEMA],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent,
        MockComponent(NavigationComponent),
//         ...MockComponents([])
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'little-crm'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Little CRM');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent)
      .toContain('Little CRM');
  });
});
