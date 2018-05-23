import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-banner',
  templateUrl: './login-banner.component.html',
  styleUrls: ['./login-banner.component.css']
})
export class LoginBannerComponent implements OnInit {
  images = [
    {name : 'football',src : '../../assets/football.png'},
    {name : 'match',src : '../../assets/match-big.png'},
    {name : 'team',src : '../../assets/messenger-big.png'},
    {name : 'pitch',src : '../../assets/hockey-pitch.png'},
    {name : 'schedule',src : '../../assets/calendar.png'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
