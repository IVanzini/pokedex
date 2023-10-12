import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articoli-list',
  templateUrl: './articoli-list.component.html',
  styleUrls: ['./articoli-list.component.css']
})
export class ArticoliListComponent implements OnInit {
  constructor(private bs: BlogService) {
    
  }
  ngOnInit(): void {
    this.bs.getArticoli().subscribe(articoli => {
      console.log(articoli);
    });
  }
}
