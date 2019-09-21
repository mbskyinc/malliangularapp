import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountingComponent } from './counting';
import { AdditionComponent } from './addition';
import { MultiplicationComponent } from './multiplication';
import { SubtractionComponent } from './subtraction';
import { MyMaterialModule} from './material.module';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ViewpracticeComponent } from './viewpractice/viewpractice.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'counting', component: CountingComponent },
  { path: 'addition', component: AdditionComponent },
  { path: 'multiplication', component: MultiplicationComponent },
  { path: 'subtraction', component: SubtractionComponent },
  { path: 'viewpractice', component: ViewpracticeComponent },
  { path: 'register', component: RegistrationComponentComponent },
  { path: 'login', component: LoginComponentComponent }

  // otherwise redirect to home
 // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
