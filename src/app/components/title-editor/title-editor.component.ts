import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-title-editor',
  templateUrl: './title-editor.component.html',
  styleUrls: ['./title-editor.component.css']
})
export class TitleEditorComponent {
  title = new FormControl("pippo", [Validators.required]);
}
