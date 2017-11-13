import { TestBed,ComponentFixture, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component:  AppComponent;
  let fixture:  ComponentFixture<AppComponent>;
  // let routerStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ FormsModule,
                 RouterTestingModule
               ],
      // providers: [{ provide: Router, useValue: routerStub }]         
    }).compileComponents();
  }));

  beforeEach(() => {
    // routerStub = {
    //   navigate: jasmine.createSpy('navigate')
    // }

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log user out', async(()=>{
    localStorage.setItem('currentUser', "432HJH5435JKH34KHJH");
    component.logout();

    expect(localStorage.getItem('currentUser')).toBeNull();
    // expect(localStorage.getItem('currentUser')).toBeUndefined();

    // expect(routerStub.navigate).toHaveBeenCalledWith(['/login']);
    
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
