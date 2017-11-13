import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { Http, Response, HttpModule, JsonpModule, Headers, RequestOptions } from '@angular/http';
import { LoginService } from '../service/login.service';
import { StarComponent } from '../star/star.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap';
import { UpdatemodalComponent } from '../home/modals/updatemodal/updatemodal.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, RouterTestingModule.withRoutes([]), ModalModule.forRoot() ],
      declarations: [ HomeComponent, StarComponent ],
      providers: [ LoginService, BsModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
