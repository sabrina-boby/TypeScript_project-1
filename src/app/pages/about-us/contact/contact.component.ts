import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  formData!: FormGroup;

  constructor(
    private fb: FormBuilder

  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formData = this.fb.group({
      fname: [null,Validators.required],
      lname: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      phone: [null,[Validators.required,Validators.minLength(6)]],
      message: [null,Validators.required],
    })
  }

  onsubmit() {
    
    if(this.formData.valid)
      {
        console.log("click...",this.formData.value);
      }
      else{
        console.log("not valid");
      }
  }
}
