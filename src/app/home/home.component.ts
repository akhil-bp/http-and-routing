

import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Items:any[];
  name: String = "";

  constructor(
    public httpClient:HttpClient ) { }

  ngOnInit() {

  }

  getdata(){   
    this.httpClient.get('http://jsonplaceholder.typicode.com/posts?_start=5&_limit=5')
    .subscribe( (data:any[]) => {
      this.Items = data;
      console.log(this.Items);     
  })  
};


}