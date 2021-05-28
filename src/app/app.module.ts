import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import {ToastrModule} from 'ngx-toastr';
import { CarImageComponent } from './components/car/car-image/car-image/car-image.component';
import { CarDetailsComponent } from './components/car/car-details/car-details/car-details.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './inteceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    SideBarComponent,
    CarImageComponent,
    CarDetailsComponent,
    SignInComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"  
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
