import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-profile-editor-builder',
  templateUrl: './profile-editor-builder.component.html',
  styleUrls: ['./profile-editor-builder.component.css']
})
export class ProfileEditorBuilderComponent implements OnInit {
  model = new Profile();

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(value => {

      this.ageFormControl.clearValidators();

      if (value.gender == "m") {
        this.ageFormControl.addValidators([Validators.required, Validators.min(18), Validators.max(40)]);
      } else {
        this.ageFormControl.addValidators([Validators.required, Validators.min(18), Validators.max(20)]);
      }
    });

    this.profileForm.statusChanges.subscribe(status => {
      console.log("stato: ",status);
    });
  }

  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    gender: ["m"],
    active: [true],
    age: [76],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""],
    })
  });

  constructor(private fb: FormBuilder) {}

  private get ageFormControl() {
    return this.profileForm.get("age")!;
  }

  get firstNameFormControl() {
    return this.profileForm.get("firstName")!;
  }

  salva() {
    console.log(this.profileForm.value);
    console.log(this.profileForm.valid);
    console.log(this.profileForm.controls["firstName"].hasError("required"));
    
    //se il pulsante non è disabilitato fino a che profileForm.invalid, si può mettere l'if sotto
    if (this.profileForm.valid) {
      //chiamata ajax
    }
  }

  salvaTemplate() {
    console.log(this.model);
  }
}