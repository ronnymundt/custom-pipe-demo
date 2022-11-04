import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public hello: string = "Hello world! This is a example of string manipulation custom pipe."

  constructor() { }

  ngOnInit(): void { }
}
