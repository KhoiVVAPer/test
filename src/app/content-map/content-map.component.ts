import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-map',
  templateUrl: './content-map.component.html',
  styleUrls: ['./content-map.component.css']
})
export class ContentMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  map:string = '../../assets/map.jpg';
}
