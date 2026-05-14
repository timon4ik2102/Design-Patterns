export class Computer {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Computer parts: ${this.parts.join(', ')}\n`);
    }
}


