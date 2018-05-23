import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit { 
  constructor() { }

  ngOnInit() {
  }
  appName:string = 'PHŨI';
  avata:string = '../../assets/avata.png';
  menus = [
    {name:'MATCH', imgSrcString:'../../assets/match-icon.png'},
    {name:'TEAM', imgSrcString:'../../assets/team-icon.png'},
    {name:'SCHEDULE', imgSrcString:'../../assets/schedule-icon.png'},
    {name:'PITCH', imgSrcString:'../../assets/pitch-icon.png'},
    {name:'MESSENGER', imgSrcString:'../../assets/messenger-icon.png'},
  ];

}
