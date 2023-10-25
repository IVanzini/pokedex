import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(value => {
      console.log("valore: ",value);
    });

    this.profileForm.statusChanges.subscribe(status => {
      console.log("stato: ",status);
    });
  }

  profileForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl(""),
    gender: new FormControl("m"),
    active: new FormControl(true),
    age: new FormControl(76),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl(""),
    })
  });

  salva() {
    console.log(this.profileForm.value);
  }
}
