import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto002';

  art={
    codigo:0 ,
    descripcion:"",
    precio:0
  }

  articulos: any[] = [{codigo:1, descripcion:"papas", precio:10.55},
                    {codigo:2, descripcion:"manzanas", precio:12.10},
                    {codigo:3, descripcion:"melon", precio:52.30},
                    {codigo:4, descripcion:"cebollas", precio:17},
                    {codigo:5, descripcion:"calabaza", precio:20},
                  ];
agregar(){
  const existe = this.articulos.find(articulo => articulo.codigo == this.art.codigo );

  if (existe) {
    console.log('El codigo existe en la tabla');
    alert("Ya existe el codigo.");

    return;
  }
    const new_articulos = {codigo: this.art.codigo , descripcion: this.art.descripcion, precio: this.art.precio };
    this.articulos.push(new_articulos);

}

modificar(){
  const index = this.articulos.findIndex(articulo => articulo.codigo == this.art.codigo);
  if (index !== -1) {
    this.articulos[index] = { ...this.art };

}
}

borrar(index: number){
  this.articulos.splice(index, 1);
}

seleccionar(item: any){
  this.art = { ...item };
  const index = this.articulos.indexOf(item);
  this.articulos.concat(index, 1);
}


}

