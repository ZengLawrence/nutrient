import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import './routes';
import { register } from './routes';

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

register(app);

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line: no-console
    console.log( `server started at http://localhost:${ port }` );
} );
