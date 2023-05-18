import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { Presence, Spotify } from '../types/lanyard';

export const doingAtom = atom<Presence | null>(null);

export const defaultSpotify = {
  track_id: '7Ib1fj8HnRmi9WRBpDK6ie',
  timestamps: {
    start: 1684416176408,
    end: 1684416391658,
  },
  song: 'The Way',
  artist: 'Sultan + Shepard',
  album_art_url: 'https://i.scdn.co/image/ab67616d0000b273c2d680d3ca07020db799d627',
  album: 'Echoes Of Life: Night',
};

export const spotifyAtom = atomWithStorage('spotify', <Spotify | null>({}));
