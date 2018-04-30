import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando = true;

  constructor( private http: Http ) {
    this.cargar_productos();
  }

  /**
   * cargar_prodcutos
   */
  public cargar_productos() {

      this.cargando = false;

      this.http.get('https://mapas-1495405752278.firebaseio.com/productos_idx.json')
        .subscribe( res => {
          // console.log(res.json());

          // setTimeout(() => {
            this.cargando = true;
            this.productos = res.json();
          // }, 3000);

        });

  }

}
