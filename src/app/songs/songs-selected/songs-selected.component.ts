import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'sng-songs-selected',
  templateUrl: './songs-selected.component.html',
  styleUrls: ['./songs-selected.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SongsSelectedComponent implements OnInit {

  @Output() bookmarked = new EventEmitter();

  song;

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.store.select('songs').subscribe(({ currentSong }) => {
      this.song = currentSong;
    });
  }

  save() {
    this.bookmarked.emit(this.song);
  }

}
