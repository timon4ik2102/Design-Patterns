import { ISong } from "./IteratorInterface";

class Song implements ISong {
    constructor (private title:string, private artist:  string){
        this.title = title;
        this.artist = artist;
    }

    getTitle(): string {
        return this.title;
    }

    getArtist(): string {
        return this.artist;
    }
}

export default Song;
