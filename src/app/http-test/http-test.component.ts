import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http'

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

private mod : any = {};
private images : any = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.getJson();
    this.getMedia();
  }

  getJson() {
    this.http.get('tsconfig.json').subscribe(
      (res:Response) => {
        const json = res.json();   
        this.mod = json.compilerOptions;
        console.log(this.mod);        
      }
    );    
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe(
      (res:Response) => {
        const json = res.json();
        this.images = json;
        console.log(json);
      }
    );    
  }

}
