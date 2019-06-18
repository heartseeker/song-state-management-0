import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as songsAction from '../store/songs.action';

@Component({
  selector: 'sng-songs-detail',
  templateUrl: './songs-detail.component.html',
  styleUrls: ['./songs-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SongsDetailComponent implements OnInit {

  @Output() selectedSong = new EventEmitter();

  @Input() song;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  selectSong(song) {
    this.store.dispatch(new songsAction.SelectSong(song));
  }

}
