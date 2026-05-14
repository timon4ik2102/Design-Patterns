class Logger {
    private static instance: Logger;
    private logMessages: string[] = [];

    private constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public createLog(message: string): void {
        this.logMessages.push(message);
        console.log(`Log added: ${message}`);
    }

    public getLog(): string[] {
        return this.logMessages;
    }

    public clearLog(): void {
        this.logMessages = [];
        console.log("Logs cleared.");
    }
}

export default Logger;
