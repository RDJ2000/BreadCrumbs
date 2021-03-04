import { Component, OnInit } from '@angular/core';
declare let L;
@Component({
  selector: 'app-do-charity',
  templateUrl: './do-charity.component.html',
  styleUrls: ['./do-charity.component.scss'],
})
export class DoCharityComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  location(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } 


  }
  showPosition(position) {
    console.log(position.coords.latitude,position.coords.longitude);
    var mymap = L.map('mapid').setView([position.coords.latitude,position.coords.longitude], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmRqIiwiYSI6ImNrbHY3NWRpZDI2Zm4yb253ZXNyYzloZGwifQ.7S3p4r_V8eW6uQRB6B0-wg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
var marker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap);
    }

}
