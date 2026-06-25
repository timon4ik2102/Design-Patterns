import { IIterator } from "./IteratorInterface";
import Song from "./Song";

class ReversePlaylistIterator implements IIterator<Song> {
    private index: number;

    constructor(private songs: Song[]) {
        this.index = songs.length - 1;
    }

    hasNext(): boolean {
        return this.index >= 0;
    }

    current(): Song {
        if (!this.hasNext()) {
            throw new Error('No more songs in this playlist');
        }
        const song = this.songs[this.index];
        if (song === undefined) {
            throw new Error('No more songs in this playlist');
        }
        return song;
    }

    next(): Song {
        const song = this.current();
        this.index--;
        return song;
    }
}

export default ReversePlaylistIterator;
