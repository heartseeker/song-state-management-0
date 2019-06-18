import { CurrentSong } from '../model/current-song.model';
import * as songAction from './songs.action';

export interface SongsState {
    currentSong: CurrentSong | null;
}

const initialState: SongsState = {
    currentSong: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        case songAction.SongsActionType.SELECT_SONG:
            return { ...state, currentSong: action.payload  };
        default:
            return state;
    }
};
