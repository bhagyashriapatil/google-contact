import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateDrivenLoginComponent } from './template-driven-login.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, Response, HttpModule, JsonpModule, Headers, RequestOptions } from '@angular/http';
import { LoginService } from '../service/login.service';

describe('TemplateDrivenLoginComponent', () => {
  let component: TemplateDrivenLoginComponent;
  let fixture: ComponentFixture<TemplateDrivenLoginComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenLoginComponent ],
      imports: [ FormsModule,
                 HttpModule, 
                 RouterTestingModule.withRoutes([])
               ],
      providers: [ LoginService ]         
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created the template driven component', () => {
    expect(component).toBeTruthy();
  });
});
