import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import * as lyrics from '../lyrics';


@Component({
  selector: 'sng-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SongsListComponent implements OnInit {

  @Output() currentSong = new EventEmitter();

  songs = [
    {
      title: 'Wonderwall',
      artist: 'Oasis',
      lyrics: lyrics.wonderwall
    },
    {
      title: 'Best I Ever Had',
      artist: 'Vertical Horizon',
      lyrics: lyrics.bestIEverHad
    },
    {
      title: 'Collide',
      artist: 'Howie Day',
      lyrics: lyrics.collide
    },
    {
      title: 'Push',
      artist: 'Matchbox 20',
      lyrics: lyrics.push
    },
    {
      title: 'Chasing Cars',
      artist: 'Snow Patrol',
      lyrics: lyrics.chasingCars
    },
    {
      title: 'Yellow',
      artist: 'Cold Play',
      lyrics: lyrics.yellow
    },
  ];

  lyric = lyrics.yellow;

  constructor() { }

  ngOnInit() {
  }

  selectedSong(song) {
    this.currentSong.emit(song);
  }

}
