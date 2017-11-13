import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenLoginComponent } from '../template-driven-login/template-driven-login.component';
import { SignupComponent } from '../reactive-form-signup/signup.component';
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from '../admin/admin.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { AuthGuard } from '../auth.guard';
import { ListResolver } from '../router/list.resolver';


export const appRoutes: Routes = [
    { path: 'login', component: TemplateDrivenLoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard], resolve: {user: ListResolver} },
    { path: 'admin', component: AdminComponent },
    { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    { path: '**', component: PagenotfoundComponent }       //wild card route
]

export const routing = RouterModule.forRoot(appRoutes)

