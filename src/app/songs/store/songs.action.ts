import { Action } from '@ngrx/store';
import { CurrentSong } from '../model/current-song.model';

export enum SongsActionType {
    SELECT_SONG = '[Songs] Select Song'
}

export class SelectSong implements Action {

    readonly type = SongsActionType.SELECT_SONG;

    constructor(public payload: CurrentSong) {}
}

export type Action = SelectSong;
