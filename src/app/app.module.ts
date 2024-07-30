import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NfycStepperFormComponent } from './nfyc-stepper-form/nfyc-stepper-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NfycProgressBarComponent } from './nfyc-progress-bar/nfyc-progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NfycLcHomeComponent } from './nfyc-lc-home/nfyc-lc-home.component';
import { RouterModule } from '@angular/router';
import { NfycConceptHomeComponent } from './nfyc-concept-home/nfyc-concept-home.component';

@NgModule({
  declarations: [AppComponent, NfycStepperFormComponent, NfycProgressBarComponent, NfycLcHomeComponent, NfycConceptHomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    AppRoutingModule, RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
