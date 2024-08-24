import { writable } from 'svelte/store';
import type { MapTile } from '../data/map';

export const map = writable<MapTile>(JSON.parse(localStorage.getItem('map')));
map.subscribe(value => localStorage.map = JSON.stringify(value));