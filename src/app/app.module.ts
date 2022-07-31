import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { CoreModule } from './core/core.module';
import { UserComponent } from './core/components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserManualComponent } from './core/components/user-manual/user-manual.component';
import { EventsComponent } from './core/components/events/events.component';
import { ReviewComponent } from './core/components/review/review.component';
import { TopicsComponent } from './core/components/topics/topics.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    ForgotPasswordComponent,
    UserComponent,
    UserManualComponent,
    EventsComponent,
    ReviewComponent,
    TopicsComponent
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CoreModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule

  ],
  exports:[
    UserComponent
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
