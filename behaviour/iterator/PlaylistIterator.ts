import { IIterator } from "./IteratorInterface";
import Song from "./Song";

class PlaylistIterator implements IIterator<Song> {
    private index = 0;

    constructor(private songs: Song[]) {}

    hasNext(): boolean {
        return this.index < this.songs.length;
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
        this.index++;
        return song;
    }
}

export default PlaylistIterator;
