import { IncomingMessage, Server, ServerResponse } from "node:http";
import app from "./app";
import dotenv from 'dotenv';

dotenv.config();

const port: number | string = process.env.PORT || 3000;
const mode: String = process.env.ENV || "dev";

const server: Server<typeof IncomingMessage, typeof ServerResponse> = app.listen(port, () => {
    const banner = [
        '',
        '╔══════════════════════════════════════════════════╗',
        `║       Server running on port ${port} ${mode}            ║`,
        '╚══════════════════════════════════════════════════╝',
        ''
    ].join('\n');
    console.log(banner);
    console.info("Press CTRL-C to stop\n");
});


process.on('uncaughtException', error => {
    console.log(error);
});

process.on('unhandledRejection', (reason, p) => {
    console.log(reason);
});

export default server;