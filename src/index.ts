import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
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

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line: no-console
    console.log( `server started at http://localhost:${ port }` );
} );
