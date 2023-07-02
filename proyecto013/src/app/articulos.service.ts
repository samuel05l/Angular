import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) {  }

  retornar(){
    return this.http.get("httpp://scratchya.com.ar/vue/datos.php");
  }

}
