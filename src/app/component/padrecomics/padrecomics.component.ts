import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comics.service';


@Component({
  selector: 'app-padrecomics',
  templateUrl: './padrecomics.component.html',
  styleUrls: ['./padrecomics.component.css']
})
export class PadrecomicsComponent implements OnInit {

  public arrayComics!: Array<Comic>;
  public comicFavorito!: Comic;

  @ViewChild("cajatitulo") cajaTitulo!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;
  @ViewChild("cajadescripcion") cajaDescripcion!: ElementRef;

  insertarComic():void{
    var titulo = this.cajaTitulo.nativeElement.value;
    var imagen = this.cajaImagen.nativeElement.value;
    var descripcion = this.cajaDescripcion.nativeElement.value;

    var newComic = new Comic(titulo,imagen,descripcion);
    this.arrayComics.push(newComic);
  }

  //AL SELECCIONAR FAVORITO EN EL HIJO, RECIBIREMOS UN COMIC
  seleccionarFavorito(event:Comic){
    this.comicFavorito = event;
  }

  //AL MODIFICAR EN EL HIJO, RECIBIMOS EL INDEX A MODIFICAR
  modificarComic(event:number):void{
    var titulo = this.cajaTitulo.nativeElement.value;
    var imagen = this.cajaImagen.nativeElement.value;
    var descripcion = this.cajaDescripcion.nativeElement.value;
    this.arrayComics[event] = new Comic(titulo,imagen,descripcion);
  }

  //AL MODIFICAR EN EL HIJO, RECIBIMOS EL INDEX A BORRAR
  borrarComic(event:number):void{
    this.arrayComics.splice(event,1);
  }

  constructor(private _service:ComicService) { 
    
  }

  ngOnInit(): void {
    this.arrayComics = this._service.getComics();
  }

}
