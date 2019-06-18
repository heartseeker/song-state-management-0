import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sng-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  currentSong;

  constructor() { }

  ngOnInit() {
  }

  selectSong(song) {
    this.currentSong = song;
  }

  bookmark(song) {
    console.log('BOOKMARKED SONG >>> ', song);
  }

}
