import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { EmpservService } from './service/empserv.service';


export const firebaseConfig ={
  apiKey: "AIzaSyAkbb0K-JW_0iSn9j0m9x0O6G6OQO8lSAE",
  authDomain: "angularcrud-b164e.firebaseapp.com",
  projectId: "angularcrud-b164e",
  storageBucket: "angularcrud-b164e.appspot.com",
  messagingSenderId: "759691645086",
  appId: "1:759691645086:web:67e3c2d3d998150ad3ab8f",
  measurementId: "G-NLT68WVR5P"
};


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [EmpservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
