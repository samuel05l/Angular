import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articulos: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://rickandmortyapi.com/api/character")
      .subscribe(
        (response: any) => {
          this.articulos = response.results;
        }
      );
      // this.http.get("https://rickandmortyapi.com/api/location")
      // .subscribe(
      //   (response: any) => {
      //     this.articulos = response.results;
      //   }
      // );
      // this.http.get("https://rickandmortyapi.com/api/episode")
      // .subscribe(
      //   (response: any) => {
      //     this.articulos = response.results;
      //   }
      // );
  }
}
