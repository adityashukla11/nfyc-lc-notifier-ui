import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { NfycService } from '../nfyc.service';
import { NfycLcUser } from '../NfycLcUser';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-nfyc-stepper-form',
  templateUrl: './nfyc-stepper-form.component.html',
  styleUrls: ['./nfyc-stepper-form.component.css']
})
export class NfycStepperFormComponent{

  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.email],
  });

  isLinear = true;
  @ViewChild('stepper') stepper: MatStepper;
  constructor(private formBuilder: FormBuilder, public nfycService: NfycService) {}


  createUser() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
    const lcUsername = this.firstFormGroup.get('firstCtrl').value;
    const email = this.secondFormGroup.get('secondCtrl').value;
    const nfycUser = NfycLcUser.getNfycUser('Test', lcUsername, email);
    this.stepper.steps.forEach(step => step.editable = false);
    this.nfycService.createLcUser(nfycUser);
    }
  }
  resetSettings() {
    this.nfycService.isLoading = false;
    this.nfycService.errorMessage = '';
    this.nfycService.apiResponse = '';
  }

}
