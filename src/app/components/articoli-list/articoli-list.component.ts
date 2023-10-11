import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articoli-list',
  templateUrl: './articoli-list.component.html',
  styleUrls: ['./articoli-list.component.css']
})
export class ArticoliListComponent {
  constructor(private bs: BlogService) {
    
  }
}
