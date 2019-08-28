import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){

  }
}
