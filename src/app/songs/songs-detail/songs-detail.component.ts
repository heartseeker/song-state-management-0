import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sng-songs-detail',
  templateUrl: './songs-detail.component.html',
  styleUrls: ['./songs-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SongsDetailComponent implements OnInit {

  @Output() selectedSong = new EventEmitter();

  @Input() song;

  constructor() { }

  ngOnInit() {
  }

  selectSong(song) {
    this.selectedSong.emit(song);
  }

}
