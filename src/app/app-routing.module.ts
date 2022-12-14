import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { UserManualComponent } from './core/components/user-manual/user-manual.component';
import { EventsComponent } from './core/components/events/events.component';
import { ReviewComponent } from './core/components/review/review.component';
import { TopicsComponent } from './core/components/topics/topics.component';

const routes: Routes = [

  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path: 'login', pathMatch: 'full', component: LoginComponent },
  {path: 'signup', pathMatch: 'full', component: SignupComponent },
  {path:'forgot-password', pathMatch: 'full', component: ForgotPasswordComponent},
  {path:'user-manual', pathMatch: 'full', component: UserManualComponent},
  {path:'events', pathMatch: 'full', component: EventsComponent},
  {path:'review',pathMatch:'full',component:ReviewComponent},
  {path:'topics',pathMatch:'full',component:TopicsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
