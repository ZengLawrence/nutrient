import { Server, Model } from "miragejs";
import { delayRouteHandler } from './Function';

const uuid = require('uuid/v4');  //random

function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      'foodCalorie': Model,
    },

    seeds(server) {
      server.create("foodCalorie", { _id: uuid(), foodGroup: 'Vegetable', food: 'Broccoli', caloriesPer100g: 35 });
      server.create("foodCalorie", { _id: uuid(), foodGroup: 'Fruit', food: 'Orange', caloriesPer100g: 47 });
      server.create("foodCalorie", { _id: uuid(), foodGroup: 'Carbohydrate', food: 'Sliced Bread', caloriesPer100g: 110 });
    },

    routes() {
      this.namespace = "api";

      this.get("/food-calories");

      this.post("/food-calories",
        (schema, request) => {
          const createFoodCalorieHandler = () => {
            const attrs = JSON.parse(request.requestBody);
            const saved = schema.foodCalories.create({ ...attrs, _id: uuid() });
            return saved.attrs;
          };
          return delayRouteHandler(createFoodCalorieHandler, { timing: 1000 })
        });

    },
  })

  return server
}

export const startMockApiServer = () => {
  console.log(`${process.env.NODE_ENV}`);
  if (process.env.NODE_ENV === "development") {
    makeServer()
  }
};