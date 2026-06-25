import { IIterator } from "./IteratorInterface";
import Song from "./Song";
import PlaylistIterator from "./PlaylistIterator";
import ReversePlaylistIterator from "./ReversePlaylistIterator";

class Playlist {
    private songs: Song[] = [];

    addSong(song: Song): void {
        this.songs.push(song);
    }

    createIterator(): IIterator<Song> {
        return new PlaylistIterator(this.songs);
    }

    createReverseIterator(): IIterator<Song> {
        return new ReversePlaylistIterator(this.songs);
    }
}

export default Playlist;
