import { Router } from 'express';
import { Response, Request } from 'express';
import FoodCalorie, { IFoodCalorie } from '../models/FoodCalorie';
import mongoose from 'mongoose';

// TODO externalize mongo connection string
const uri: string = "mongodb://localhost/nutrient";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, options, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully Connected!");
    }
});

const foodCaloriesRoute = (req: Request, resp: Response) => {
    FoodCalorie.find((err, foodCalories) => {
        if (err) {
            resp.send("Error!");
        } else {
            resp.json({ foodCalories: foodCalories });
        }
    })
};

const addFoodCalorie = (req: Request, resp: Response) => {
    const foodCalorie = new FoodCalorie(req.body);
    foodCalorie.save((err) => {
        if (err) {
            resp.send(err);
        } else {
            resp.send(foodCalorie);
        }

    });
};

const deleteFoodCalorie = async (req: Request, resp: Response) => {
    const id = req.params['id'];
    const result = await FoodCalorie.deleteOne({ _id: id });
    if (result.ok) {
        resp.sendStatus( result.deletedCount === 1 ? 204 : 404);
    } else {
        resp.sendStatus(500);
    }
};

export const register = (router: Router) => {
    router.get('/api/food-calories', foodCaloriesRoute);
    router.post('/api/food-calories', addFoodCalorie);
    router.delete('/api/food-calories/:id', deleteFoodCalorie);

    return router;
};