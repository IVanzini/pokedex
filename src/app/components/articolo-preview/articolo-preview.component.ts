import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articolo } from 'src/app/models/articolo';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articolo-preview',
  templateUrl: './articolo-preview.component.html',
  styleUrls: ['./articolo-preview.component.css']
})
export class ArticoloPreviewComponent {
  @Input()
  articolo?: Articolo;

  @Output()
  onRichiestaCancellazione = new EventEmitter<number>();

  @Output()
  onRichiestaModifica = new EventEmitter<number>();

  elimina() {
    if (confirm("Sei sicuro di voler eliminare l'articolo?"))
    {
      this.onRichiestaCancellazione.emit(this.articolo!.id);
    }
    
  }

  modifica() {
    this.onRichiestaCancellazione.emit(this.articolo!.id);
    
  }
}


