import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-hijocomics',
  templateUrl: './hijocomics.component.html',
  styleUrls: ['./hijocomics.component.css']
})
export class HijocomicsComponent implements OnInit {

  @Input() comic!: Comic;
  @Input() index!: number;

  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();
  marcarFavorito():void{
    this.seleccionarFavorito.emit(this.comic);
  }

  //AL MODIFICAR EN EL HIJO, RECIBIMOS EL INDEX A MODIFICAR
  @Output() modificarComic: EventEmitter<any> = new EventEmitter();
  updateComic():void{
    this.modificarComic.emit(this.index)
  }

  @Output() borrarComic: EventEmitter<any> = new EventEmitter();
  eliminarComic():void{
    this.borrarComic.emit(this.index)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
