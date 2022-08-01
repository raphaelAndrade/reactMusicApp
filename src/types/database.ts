import { albums } from './albums';
import { artists } from './artists';

export type IDataBase = {
    album: albums;
    album_id: number;
    artist: artists;
    id: number;
    name: string;
    track: number;
}