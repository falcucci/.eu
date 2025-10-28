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
  song: 'Sunset',
  artist: 'The Midnight',
  album_art_url: 'https://i.scdn.co/image/ab67616d0000b27366f27b0ef0b92099a1927721',
  album: 'Endless Summer',
};

export const spotifyAtom = atomWithStorage('spotify', <Spotify | null>{});
