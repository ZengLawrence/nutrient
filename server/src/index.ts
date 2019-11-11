import dotenv from 'dotenv';
import express from 'express';
import { foodCaloriesRoute } from './routes/FoodCalories';

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

app.get( '/api/food-calories', foodCaloriesRoute );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line: no-console
    console.log( `server started at http://localhost:${ port }` );
} );
