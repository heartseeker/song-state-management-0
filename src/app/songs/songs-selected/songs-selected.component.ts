import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sng-songs-selected',
  templateUrl: './songs-selected.component.html',
  styleUrls: ['./songs-selected.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SongsSelectedComponent implements OnInit {

  @Output() bookmarked = new EventEmitter();

  @Input() song;

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.bookmarked.emit(this.song);
  }

}
