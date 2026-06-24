export interface IIterator<T> {
    hasNext(): boolean;
    current(): T;
    next(): T;
}

export interface ISong {
    getTitle(): string;
    getArtist(): string;
}
