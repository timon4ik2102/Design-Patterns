import Playlist from "./Playlist";
import Song from "./Song";

function iteratorTest() {
    const playlist = new Playlist();
    playlist.addSong(new Song("Song 1", "Metallica"));
    playlist.addSong(new Song("Song 2", "Queen"));
    playlist.addSong(new Song("Song 3", "Pink Floyd"));

    const iterator = playlist.createIterator();
    while (iterator.hasNext()) {
        const song = iterator.next();
        console.log(`${song.getTitle()} - ${song.getArtist()}`);
    }

    const reverseIterator = playlist.createReverseIterator();
    while (reverseIterator.hasNext()) {
        const song = reverseIterator.next();
        console.log(`${song.getTitle()} - ${song.getArtist()}`);
    }
}

export default iteratorTest;
