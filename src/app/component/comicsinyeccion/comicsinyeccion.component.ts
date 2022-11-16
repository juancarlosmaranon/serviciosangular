import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comicsinyeccion',
  templateUrl: './comicsinyeccion.component.html',
  styleUrls: ['./comicsinyeccion.component.css'],
  //NECESITAM0S INYECTARLO EN PROVIDERS PARA PODER 
  //RECUPERARLO EN EL CONSTRUCTOR
  providers: [ComicService]
})
export class ComicsinyeccionComponent implements OnInit {

  public comics!: Array<Comic>;

  //EN LOS CONSTRUCTORES, SOLAMENTE SE REALIZA LA inversion de control
  //LOS OBJETOS SE SUELEN UTILIZAR DENTRO DE Init()
  constructor(private _service:ComicService) { }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

}
