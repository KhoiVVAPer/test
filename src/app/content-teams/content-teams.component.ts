import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-teams',
  templateUrl: './content-teams.component.html',
  styleUrls: ['./content-teams.component.css']
})
export class ContentTeamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teams = [
    { id: 1, name: 'MANCHESTER TEAM',img: '../../assets/logo01.png', online: true, distance: '1' },
    { id: 2, name: 'JANETO TEAM', img: '../../assets/logo02.png',online: false, distance: '2' },
    { id: 3, name: 'UTD TEAM', img: '../../assets/logo03.png',online: true, distance: '2' },
    { id: 4, name: 'UNITED TEAM',img: '../../assets/logo04.png', online: false, distance: '2' },
    { id: 5, name: 'EARTHQUAKES TEAM',img: '../../assets/logo05.png', online: true, distance: '3' },
    { id: 6, name: 'VFF TEAM',img: '../../assets/logo06.png', online: false, distance: '5' },
    { id: 7, name: 'BFC TEAM',img: '../../assets/logo07.png', online: true, distance: '6' },
    { id: 8, name: 'DE FUTBOL TEAM',img: '../../assets/logo08.png', online: true, distance: '9' }
  ];

}
