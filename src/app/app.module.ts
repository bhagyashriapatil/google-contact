import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { appRoutes } from './router/router.component';
import { AuthGuard } from './auth.guard';
import { ListResolver } from './router/list.resolver';
import { AppComponent } from './app.component';
import { TemplateDrivenLoginComponent } from './template-driven-login/template-driven-login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './reactive-form-signup/signup.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginService } from './service/login.service';

import { TooltipModule, ModalModule} from 'ngx-bootstrap';
import { CreatenewComponent } from './admin/modal/createnew/createnew.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenLoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    HomeComponent,
    CreatenewComponent,
    AdminComponent
  ],
  entryComponents: [
    CreatenewComponent
  ],
   imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [ ListResolver, LoginService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
