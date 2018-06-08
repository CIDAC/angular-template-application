// Angular imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

// Application imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';

// Firebase Access
import { FirebaseAccessModule } from './shared/firebase-access/firebase-access.module';


const ROUTES = [
  { path: "", redirectTo: "/products", pathMatch: "full" },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    AuthModule,
    CoreModule,
    MaterialModule,

    RouterModule.forRoot(ROUTES),
    FirebaseAccessModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
