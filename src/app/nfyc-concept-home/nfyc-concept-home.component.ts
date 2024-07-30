import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NfycService } from '../nfyc.service';
import { Concept } from '../Concepts';

@Component({
  selector: 'app-nfyc-concept-home',
  templateUrl: './nfyc-concept-home.component.html',
  styleUrls: ['./nfyc-concept-home.component.css'],
  providers: [NfycService]
})
export class NfycConceptHomeComponent implements OnInit {
  conceptForm: FormGroup;
  private subscription: any;

  constructor(private fb: FormBuilder, public conceptService: NfycService) { }

  ngOnInit(): void {
    this.conceptForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      conceptTitle: ['', [Validators.required, Validators.maxLength(250), this.noSpecialCharacters]],
      conceptDescription: ['', Validators.required],
      priority: ['', [Validators.required, Validators.min(1), Validators.max(3)]]
    });
  }

  noSpecialCharacters(control: AbstractControl): ValidationErrors | null {
      const allowed = /^[a-zA-Z0-9 \[\]]*$/g.test(control.value);
      return !allowed ? { allowedCharacters: { value: control.value } } : null;
  }
  onSubmit(): void {
    this.conceptService.resetService();
    if (this.conceptForm.valid) {
      const email = this.conceptForm.get('email').value;
      const conceptTitle = this.conceptForm.get('conceptTitle').value;
      const conceptDescription = this.conceptForm.get('conceptDescription').value;
      const priority = this.conceptForm.get('priority').value;
      this.subscription = this.conceptService.addConceptForUser(
        Concept.getConcept(email, conceptTitle, conceptDescription, priority)
      );
    } else {
      this.conceptService.errorMessage = 'Please correct the errors in the form before submitting.';
    }
  }

  onReset() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.conceptService.resetService();
    this.conceptForm.reset();
  }
}
