import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imgSrc:string = "https://dummyimage.com/300/00ff48/ff0000.png&text=Image+Found"
  constructor() { 
  }

  ngOnInit(): void {

  }

}
